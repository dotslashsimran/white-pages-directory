"use client"

import { useMemo } from "react"
import directoryData from "@/lib/directory-data.json"
import { DirectorySection } from "./directory-section"

export function DirectoryContent() {
  const sections = useMemo(() => {
    return directoryData.sections.map((section) => ({
      ...section,
      entries: [...section.entries].sort((a, b) => a.title.localeCompare(b.title)),
    }))
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 border-b border-neutral-200 pb-8">
        <h1 className="text-4xl font-light tracking-tight text-foreground mb-2">White Pages</h1>
        <p className="text-sm text-muted-foreground">A personal directory of links, projects, and writing</p>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section) => (
          <DirectorySection key={section.id} title={section.title} entries={section.entries} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-neutral-200 text-xs text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}
