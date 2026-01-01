"use client"

import { DirectoryEntry } from "./directory-entry"

interface Entry {
  title: string
  description: string
  url?: string
  isPrivate?: boolean
}

interface DirectorySectionProps {
  letter: string
  entries: Entry[]
}

export function DirectorySection({ letter, entries }: DirectorySectionProps) {
  return (
    <section id={`letter-${letter}`} className="scroll-mt-24">
      <div className="mb-10">
        <h2 className="text-5xl md:text-6xl font-serif font-extralight tracking-tight text-text/15 mb-4">
          {letter}
        </h2>
        <div className="w-12 h-[0.5px] bg-text/10"></div>
      </div>

      <div className="space-y-0">
        {entries.map((entry, idx) => (
          <DirectoryEntry key={`${letter}-${idx}`} entry={entry} />
        ))}
      </div>

      <div className="mt-16 md:mt-20" />
    </section>
  )
}
