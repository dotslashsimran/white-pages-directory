"use client"

interface LandingPageProps {
  onOpen: () => void
}

export function LandingPage({ onOpen }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-12">
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.4em] text-text/30 font-serif uppercase">Est. 2026</p>
            <div className="w-16 h-[0.5px] bg-text/15 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-extralight tracking-[-0.02em] text-text leading-[0.85]">
              WHITE<br/>PAGES
            </h1>
            <p className="text-base md:text-lg text-text/50 font-serif italic max-w-md mx-auto leading-relaxed font-light">
              A directory for the discerning internet wanderer
            </p>
          </div>

          <div className="pt-12">
            <button
              onClick={onOpen}
              className="group relative inline-flex items-center gap-4 text-[11px] tracking-[0.3em] font-serif uppercase text-text/70 transition-all hover:text-text hover:gap-6"
            >
              <span>Enter Directory</span>
              <span className="text-[10px] transition-all">→</span>
            </button>
          </div>

          <div className="pt-24">
            <p className="text-[10px] tracking-[0.3em] text-text/25 font-serif uppercase">
              Compiled & Maintained with Intention
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
