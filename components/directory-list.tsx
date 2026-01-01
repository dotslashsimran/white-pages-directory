"use client"

import { DirectorySection } from "./directory-section"
import type { DirectoryItem } from "@/lib/directory-data"

export function DirectoryList({ sections }: { sections: DirectoryItem[] }) {
  return (
    <div className="space-y-0">
      {sections.map((section) => (
        <DirectorySection key={section.letter} letter={section.letter} entries={section.entries} />
      ))}
    </div>
  )
}
