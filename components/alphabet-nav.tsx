"use client"

export function AlphabetNav({
  onLetterClick,
  availableLetters,
}: {
  onLetterClick: (letter: string) => void
  availableLetters: string[]
}) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col gap-1">
        {alphabet.map((letter) => {
          const isAvailable = availableLetters.includes(letter)
          return (
            <button
              key={letter}
              onClick={() => onLetterClick(letter)}
              disabled={!isAvailable}
              className={`text-xs font-serif tracking-widest transition-opacity duration-100 ${
                isAvailable ? "cursor-pointer opacity-100 hover:opacity-50" : "opacity-20 cursor-not-allowed"
              }`}
              title={isAvailable ? `Jump to ${letter}` : `No entries for ${letter}`}
            >
              {letter}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
