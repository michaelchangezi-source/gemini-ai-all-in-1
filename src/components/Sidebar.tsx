import { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, ChevronRight, Home, Menu, X } from 'lucide-react';
import { allChapters } from '@/data/bookContent';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentChapter: string | null;
  currentSection: string | null;
  onChapterSelect: (chapterId: string | null) => void;
  onSectionSelect: (chapterId: string, sectionId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({
  currentChapter,
  currentSection,
  onChapterSelect,
  onSectionSelect,
  isOpen,
  onToggle,
}: SidebarProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);

  // Sync expanded chapters with current chapter
  useEffect(() => {
    if (currentChapter && !expandedChapters.includes(currentChapter)) {
      setExpandedChapters((prev) => [...prev, currentChapter]);
    }
  }, [currentChapter]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => {
      const isExpanded = prev.includes(chapterId);
      if (isExpanded) {
        // If already expanded, collapse it
        return prev.filter((id) => id !== chapterId);
      } else {
        // If not expanded, expand it and select the chapter
        return [...prev, chapterId];
      }
    });
  };

  const handleChapterClick = (chapterId: string) => {
    const isCurrentlyExpanded = expandedChapters.includes(chapterId);
    
    if (isCurrentlyExpanded) {
      // If already expanded, just collapse it
      toggleChapter(chapterId);
    } else {
      // If not expanded, expand it and select the chapter
      toggleChapter(chapterId);
      onChapterSelect(chapterId);
    }
  };

  const isChapterExpanded = (chapterId: string) =>
    expandedChapters.includes(chapterId);

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-full w-80 bg-slate-50 border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 flex-shrink-0">
            <button
              onClick={() => onChapterSelect(null)}
              className="flex items-center gap-3 w-full text-left"
            >
              <div className="p-2 bg-white/20 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-white text-lg leading-tight">
                  Gemini AI
                </h1>
                <p className="text-blue-100 text-sm">商用All-in-1指南</p>
              </div>
            </button>
          </div>

          {/* Navigation - with proper scrolling */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <nav className="p-4 pb-20">
                {/* Preface Link */}
                <button
                  onClick={() => onChapterSelect(null)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors',
                    currentChapter === null
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'hover:bg-slate-100 text-slate-700'
                  )}
                >
                  <Home className="h-5 w-5" />
                  <span>前言</span>
                </button>

                {/* Chapters */}
                <div className="mt-4 space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    章節內容
                  </p>
                  {allChapters.map((chapter) => (
                    <div key={chapter.id}>
                      {/* Chapter Button with horizontal scroll */}
                      <div className="relative group">
                        <button
                          onClick={() => handleChapterClick(chapter.id)}
                          className={cn(
                            'w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors',
                            currentChapter === chapter.id
                              ? 'bg-blue-50 text-blue-700'
                              : 'hover:bg-slate-100 text-slate-700'
                          )}
                        >
                          <div 
                            className="flex items-center gap-2 overflow-x-auto"
                            style={{ 
                              scrollbarWidth: 'thin',
                              msOverflowStyle: 'auto',
                            }}
                          >
                            <span className="text-sm font-medium flex-shrink-0">
                              {chapter.number}
                            </span>
                            <span className="text-sm whitespace-nowrap">
                              {chapter.title}
                            </span>
                          </div>
                          {isChapterExpanded(chapter.id) ? (
                            <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
                          ) : (
                            <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
                          )}
                        </button>
                      </div>

                      {/* Sections */}
                      {isChapterExpanded(chapter.id) && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-200 pl-4">
                          {chapter.sections.map((section) => (
                            <button
                              key={section.id}
                              onClick={() =>
                                onSectionSelect(chapter.id, section.id)
                              }
                              className={cn(
                                'w-full px-3 py-2 rounded text-left text-sm transition-colors block',
                                currentChapter === chapter.id &&
                                  currentSection === section.id
                                  ? 'bg-blue-100 text-blue-700 font-medium'
                                  : 'hover:bg-slate-100 text-slate-600'
                              )}
                            >
                              <span className="block truncate" title={section.title}>
                                {section.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </ScrollArea>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-100 flex-shrink-0">
            <p className="text-xs text-slate-500 text-center">
              基於 Google Gemini 2.0
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}
