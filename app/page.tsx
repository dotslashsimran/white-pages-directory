"use client"
import { useState, useMemo } from "react"
import { AlphabetNav } from "@/components/alphabet-nav"
import { DirectoryList } from "@/components/directory-list"
import { directoryData } from "@/lib/directory-data"
import { LandingPage } from "@/components/landing-page"

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const availableLetters = directoryData.map((s) => s.letter)

  const handleLetterClick = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleOpen = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpened(true)
    }, 1400)
  }

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return directoryData

    const query = searchQuery.toLowerCase()
    return directoryData
      .map((section) => ({
        ...section,
        entries: section.entries.filter(
          (entry) =>
            entry.title.toLowerCase().includes(query) ||
            entry.description.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => section.entries.length > 0)
  }, [searchQuery])

  if (!isOpened) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <main className="min-h-screen bg-paper text-text">
            <header className="border-b border-border/30">
              <div className="mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24 max-w-4xl">
                <div className="text-center space-y-8">
                  <div className="space-y-3">
                    <p className="text-[10px] tracking-[0.4em] text-text/30 font-serif uppercase">Est. 2026</p>
                    <div className="w-16 h-[0.5px] bg-text/15 mx-auto"></div>
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-extralight tracking-[-0.02em] text-text leading-[0.9]">
                    WHITE PAGES
                  </h1>
                  <p className="text-sm md:text-base text-text/50 tracking-wide font-serif italic font-light">An Internet Directory</p>
                </div>
              </div>
            </header>
          </main>
        </div>

        <div 
          className={`page-turn-container ${isAnimating ? 'animating' : ''}`}
          style={{ 
            position: 'absolute',
            inset: 0,
            perspective: '2000px',
            transformStyle: 'preserve-3d',
            pointerEvents: isAnimating ? 'none' : 'auto'
          }}
        >
          <div className={`page-turn ${isAnimating ? 'flip' : ''}`}>
            <LandingPage onOpen={handleOpen} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-paper text-text animate-fade-in">
      <header className="border-b border-border/30">
        <div className="mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24 max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.4em] text-text/30 font-serif uppercase">Est. 2026</p>
              <div className="w-16 h-[0.5px] bg-text/15 mx-auto"></div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-extralight tracking-[-0.02em] text-text leading-[0.9]">
              WHITE PAGES
            </h1>
            <p className="text-sm md:text-base text-text/50 tracking-wide font-serif italic font-light">An Internet Directory</p>
            
            <div className="pt-12 max-w-xl mx-auto">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search directory..."
                  className="w-full px-8 py-5 bg-transparent border border-text/15 text-center font-serif text-[13px] tracking-[0.05em] placeholder:text-text/25 focus:outline-none focus:border-text/30 transition-all font-light"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.2em] uppercase text-text/30 hover:text-text/50 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-[10px] text-text/35 mt-4 font-serif tracking-[0.2em] uppercase">
                  {filteredData.reduce((acc, section) => acc + section.entries.length, 0)} Results
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl py-20 md:py-24 lg:py-28">
          {filteredData.length > 0 ? (
            <DirectoryList sections={filteredData} />
          ) : (
            <div className="text-center py-32">
              <p className="text-text/35 font-serif italic text-sm font-light tracking-wide">No results found for "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-text/50 hover:text-text transition-colors font-serif"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {!searchQuery && (
          <AlphabetNav onLetterClick={handleLetterClick} availableLetters={availableLetters} />
        )}
      </div>

      <footer className="border-t border-border/30 bg-paper">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl py-16 text-center space-y-2">
          <p className="text-[10px] tracking-[0.3em] text-text/30 uppercase font-serif">Compiled and maintained with intention.</p>
          <p className="text-[10px] text-text/20 font-serif">© 2026</p>
        </div>
      </footer>
    </main>
  )
}
