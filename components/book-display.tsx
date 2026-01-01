"use client"

import { useEffect, useRef } from "react"

interface BookDisplayProps {
  onOpen: () => void
}

export function BookDisplay({ onOpen }: BookDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add("animate-open")
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <style>{`
        @keyframes pageOpen {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          50% {
            transform: rotateY(45deg) rotateX(2deg);
          }
          100% {
            transform: rotateY(0deg) rotateX(0deg);
          }
        }

        .animate-open {
          animation: pageOpen 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .book-spine {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
      `}</style>

      <div ref={containerRef} className="book-spine cursor-pointer select-none" onClick={onOpen}>
        <div className="flex gap-0 items-center justify-center">
          <div className="w-48 h-64 bg-neutral-100 border border-neutral-300 shadow-lg flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-2">
              <div className="text-xs tracking-wider text-neutral-500 uppercase">Presented</div>
              <h1 className="text-2xl font-light tracking-tight text-neutral-900">White</h1>
              <h2 className="text-2xl font-light tracking-tight text-neutral-900">Pages</h2>
              <div className="text-xs tracking-wider text-neutral-500 uppercase pt-4">A personal directory</div>
            </div>
          </div>

          <div className="w-8 h-64 bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-200 shadow-xl border-x border-neutral-300 flex items-center justify-center">
            <div className="text-xs tracking-widest text-neutral-600 rotate-90 whitespace-nowrap">WHITE PAGES</div>
          </div>

          <div className="w-48 h-64 bg-neutral-50 border border-neutral-300 shadow-lg flex flex-col items-center justify-center p-6 text-center">
            <p className="text-xs text-neutral-600 leading-relaxed">
              Click to open. A curated index of links, projects, and writing.
            </p>
            <div className="mt-8 text-xs text-neutral-400 uppercase tracking-wider">{new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
