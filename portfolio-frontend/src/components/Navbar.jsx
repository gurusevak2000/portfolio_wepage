import React from 'react'
import { useMode } from '../context/ModeContext'

export default function Navbar() {
  const { mode, setMode, isGame, t } = useMode()

  const navBg = isGame
    ? 'bg-game-bg/90 border-game-border'
    : 'bg-backend-bg/90 border-backend-border'

  const linkClass = `text-sm transition-colors duration-200 cursor-pointer ${
    isGame ? 'text-game-muted hover:text-game-text' : 'text-backend-muted hover:text-backend-text'
  }`

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm border-b ${navBg} transition-theme`}
    >
      <div className="max-w-5xl mx-auto px-6 h-13 flex items-center justify-between h-14">
        {/* Logo */}
        <span className={`text-[15px] font-medium tracking-tight ${t.text} transition-theme`}>
          Alex Mercer
        </span>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={linkClass}>
            Home
          </button>
          <button onClick={() => scrollTo('projects')} className={linkClass}>
            Projects
          </button>
          <button onClick={() => scrollTo('contact')} className={linkClass}>
            Contact
          </button>
        </div>

        {/* Mode toggle */}
        <div
          className={`flex items-center gap-1 p-1 rounded-full border ${
            isGame ? 'bg-game-surface border-game-border' : 'bg-backend-surface border-backend-border'
          } transition-theme`}
        >
          <button
            onClick={() => setMode('game')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-250 ${
              mode === 'game'
                ? 'bg-game-accent text-white'
                : isGame
                ? 'text-game-muted hover:text-game-text'
                : 'text-backend-muted hover:text-backend-text'
            }`}
          >
            Game Dev
          </button>
          <button
            onClick={() => setMode('backend')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-250 ${
              mode === 'backend'
                ? 'bg-backend-accent text-white'
                : isGame
                ? 'text-game-muted hover:text-game-text'
                : 'text-backend-muted hover:text-backend-text'
            }`}
          >
            Backend Dev
          </button>
        </div>
      </div>
    </nav>
  )
}
