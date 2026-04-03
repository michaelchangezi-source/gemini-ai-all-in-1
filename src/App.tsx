import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Preface } from '@/components/Preface';
import { ChapterContent } from '@/components/ChapterContent';
import { getChapterById } from '@/data/bookContent';
import { ScrollArea } from '@/components/ui/scroll-area';
import './App.css';

function App() {
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedChapter = currentChapter
    ? getChapterById(currentChapter)
    : null;

  const handleChapterSelect = (chapterId: string | null) => {
    setCurrentChapter(chapterId);
    setCurrentSection(null);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionSelect = (chapterId: string, sectionId: string) => {
    setCurrentChapter(chapterId);
    setCurrentSection(sectionId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        currentChapter={currentChapter}
        currentSection={currentSection}
        onChapterSelect={handleChapterSelect}
        onSectionSelect={handleSectionSelect}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen overflow-x-hidden">
        <ScrollArea className="h-screen">
          <div className="px-4 py-6 md:px-10 md:py-10">
            {selectedChapter ? (
              <ChapterContent
                chapter={selectedChapter}
                currentSection={currentSection}
                onSectionSelect={(sectionId) => handleSectionSelect(currentChapter!, sectionId)}
              />
            ) : (
              <Preface />
            )}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

export default App;
