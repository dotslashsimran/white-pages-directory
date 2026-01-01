"use client"

interface EntryProps {
  entry: {
    title: string
    description: string
    url?: string
    isPrivate?: boolean
  }
}

export function DirectoryEntry({ entry }: EntryProps) {
  if (entry.isPrivate) {
    return (
      <div className="py-6 border-b border-border/20">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 space-y-2">
            <h3 className="text-[13px] font-serif tracking-[0.02em] text-text/80 font-light uppercase">{entry.title}</h3>
            <p className="text-[12px] text-text/45 leading-relaxed font-serif font-light">{entry.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-6 border-b border-border/20 transition-all duration-300 hover:border-text/25"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 space-y-2">
          <h3 className="text-[13px] font-serif tracking-[0.02em] text-text/80 group-hover:text-text transition-colors duration-300 font-light uppercase">
            {entry.title}
          </h3>
          <p className="text-[12px] text-text/45 leading-relaxed font-serif font-light group-hover:text-text/55 transition-colors duration-300">{entry.description}</p>
        </div>
        <div className="text-[11px] text-text/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-0.5 group-hover:translate-x-1">
          →
        </div>
      </div>
    </a>
  )
}
