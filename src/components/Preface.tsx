import { Sparkles, BookOpen, Lightbulb, MessageSquare, User, ExternalLink } from 'lucide-react';
import { prefaceContent } from '@/data/bookContent';
import { Card, CardContent } from '@/components/ui/card';

export function Preface() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-8 md:p-12 mb-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-300" />
            <span className="text-blue-100 font-medium">AI 商用指南</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {prefaceContent.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-4">
            {prefaceContent.subtitle}
          </h2>
          <div className="flex items-center gap-2 text-blue-100/90">
            <User className="h-4 w-4" />
            <span className="text-sm">作者：陳卓賢（《股票投資All-in-1》作者）</span>
          </div>
          <div className="flex items-center gap-2 text-blue-100/80 mt-2">
            <ExternalLink className="h-4 w-4" />
            <a 
              href="https://www.threads.com/@destiny.solver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white hover:underline transition-colors"
            >
              個人Threads平台：https://www.threads.com/@destiny.solver
            </a>
          </div>
          <div className="flex items-center gap-2 text-blue-100/80 mt-2">
            <ExternalLink className="h-4 w-4" />
            <a 
              href="https://www.linkedin.com/in/cheuk-yin-michael-chan-24125112b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white hover:underline transition-colors"
            >
              個人LinkedIn平台：https://www.linkedin.com/in/cheuk-yin-michael-chan-24125112b/
            </a>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
          <CardContent className="p-6">
            <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-slate-800 mb-2">六章完整內容</h3>
            <p className="text-sm text-slate-600">
              從入門到進階，涵蓋寫作、分析、商業應用等五大核心領域
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
          <CardContent className="p-6">
            <MessageSquare className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-slate-800 mb-2">Prompt 模板</h3>
            <p className="text-sm text-slate-600">
              每節附可直接複製使用的 Prompt 模板，填入資料即可使用
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
          <CardContent className="p-6">
            <Lightbulb className="h-8 w-8 text-amber-600 mb-3" />
            <h3 className="font-semibold text-slate-800 mb-2">香港本地化</h3>
            <p className="text-sm text-slate-600">
              結合香港職場文化、語言習慣和行業特性的定制化建議
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {prefaceContent.sections.map((section, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
              <h3 className="text-lg font-semibold text-slate-800">
                {section.title}
              </h3>
            </div>
            <div className="p-6">
              <div className="prose prose-slate max-w-none">
                {section.content.split('\n\n').map((paragraph, pIndex) => {
                  if (paragraph.startsWith('•')) {
                    return (
                      <ul key={pIndex} className="list-disc list-inside space-y-2 my-4">
                        {paragraph.split('\n').map((item, iIndex) => (
                          <li key={iIndex} className="text-slate-700">
                            {item.replace('• ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.includes('**')) {
                    return (
                      <p
                        key={pIndex}
                        className="text-slate-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\n/g, '<br />'),
                        }}
                      />
                    );
                  }
                  return (
                    <p
                      key={pIndex}
                      className="text-slate-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-blue-200">
          <Sparkles className="h-5 w-5" />
          <span>從左側選單開始探索各章節</span>
        </div>
      </div>
    </div>
  );
}
