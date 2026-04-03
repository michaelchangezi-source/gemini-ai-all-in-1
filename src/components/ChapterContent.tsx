import { useEffect, useRef, type ReactElement } from 'react';
import type { Chapter } from '@/data/bookContent';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChapterContentProps {
  chapter: Chapter;
  currentSection: string | null;
  onSectionSelect: (sectionId: string, chapterId?: string) => void;
}

export function ChapterContent({
  chapter,
  currentSection,
  onSectionSelect,
}: ChapterContentProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll to current section
  useEffect(() => {
    if (currentSection && sectionRefs.current[currentSection]) {
      sectionRefs.current[currentSection]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [currentSection]);

  const renderMarkdownContent = (content: string) => {
    const lines = content.split('\n');
    const elements: ReactElement[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;
    let codeContent = '';

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-2 my-4 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-slate-700 break-words">{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const flushCodeBlock = () => {
      if (codeContent) {
        elements.push(
          <pre
            key={elements.length}
            className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 text-sm"
          >
            <code>{codeContent.trim()}</code>
          </pre>
        );
        codeContent = '';
      }
    };

    lines.forEach((line) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
          inCodeBlock = false;
        } else {
          flushList();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Headers
      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3
            key={elements.length}
            className="text-xl font-semibold text-slate-800 mt-8 mb-4"
          >
            {line.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2
            key={elements.length}
            className="text-2xl font-bold text-slate-800 mt-10 mb-5"
          >
            {line.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1
            key={elements.length}
            className="text-3xl font-bold text-slate-800 mt-8 mb-6"
          >
            {line.replace('# ', '')}
          </h1>
        );
        return;
      }

      // Blockquote
      if (line.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote
            key={elements.length}
            className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 rounded-r-lg"
          >
            <p className="text-slate-700 italic break-words">{line.replace('> ', '')}</p>
          </blockquote>
        );
        return;
      }

      // List items
      if (line.startsWith('• ') || line.startsWith('- ')) {
        currentList.push(line.substring(2));
        return;
      }

      // Empty line
      if (line.trim() === '') {
        flushList();
        return;
      }

      // Regular paragraph
      flushList();
      
      // Process inline formatting
      let formattedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 py-0.5 rounded text-sm">$1</code>');

      elements.push(
        <p
          key={elements.length}
          className="text-slate-700 leading-relaxed mb-4 break-words"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });

    flushList();
    flushCodeBlock();

    return elements;
  };

  return (
    <div className="max-w-4xl mx-auto overflow-x-hidden">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 hover:bg-blue-100"
          >
            {chapter.number}
          </Badge>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500 text-sm">{chapter.subtitle}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 break-words">
          {chapter.title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed break-words">
          {chapter.introduction}
        </p>
      </div>

      {/* Section Navigation */}
      <Card className="mb-8 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            本章節目錄
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            {chapter.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionSelect(section.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-colors text-sm overflow-x-auto scrollbar-hide',
                  currentSection === section.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'hover:bg-white hover:shadow-sm text-slate-700'
                )}
              >
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{section.title}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sections */}
      <div className="space-y-8">
        {chapter.sections.map((section) => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            id={section.id}
            className={cn(
              'scroll-mt-8 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all',
              currentSection === section.id && 'ring-2 ring-blue-500 ring-offset-2'
            )}
          >
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-4 md:px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg md:text-xl font-semibold text-slate-800 break-words">
                {section.title}
              </h2>
            </div>
            <div className="p-4 md:p-6">
              <div className="prose prose-slate max-w-none overflow-x-hidden">
                {renderMarkdownContent(section.content)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chapter Footer */}
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <p className="text-center text-slate-600">
          完成 {chapter.number}：{chapter.title}
        </p>
        <p className="text-center text-sm text-slate-500 mt-2">
          繼續探索其他章節，發掘更多 Gemini 的應用技巧
        </p>
      </div>
    </div>
  );
}
