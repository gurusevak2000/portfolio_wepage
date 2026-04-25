import React from 'react'
import { useMode } from '../context/ModeContext'

export default function Hero() {
  const { isGame, t } = useMode()

  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`pt-20 pb-16 px-6 max-w-5xl mx-auto transition-theme ${t.text}`}>
      {/* Mode indicator pill */}
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border mb-6 ${
          isGame
            ? 'bg-game-tag text-game-tagText border-game-border'
            : 'bg-backend-tag text-backend-tagText border-backend-border'
        } transition-theme`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${isGame ? 'bg-game-accent' : 'bg-backend-accent'}`}
        />
        {isGame ? 'Game Dev Mode' : 'Backend Dev Mode'}
      </div>

      {/* Headline */}
      <h1 className={`text-4xl font-medium leading-tight tracking-tight mb-4 ${t.text} transition-theme`}>
        {isGame ? (
          <>
            Game Developer
            <br />
            & Multiplayer Systems
          </>
        ) : (
          <>
            Backend Developer
            <br />
            & Systems Architect
          </>
        )}
      </h1>

      {/* Tagline */}
      <p
        className={`text-base max-w-lg leading-relaxed mb-8 ${t.muted} transition-theme`}
      >
        {isGame
          ? 'I design and implement interactive systems — from smooth player movement to complex networked multiplayer and AI that makes worlds feel alive.'
          : 'I build robust, scalable APIs and backend systems that power modern applications — clean architecture, reliable data, and thoughtful design.'}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(isGame
          ? ['Unity', 'FishNet', 'C#', 'Multiplayer', 'AI Systems']
          : ['ASP.NET Core', 'REST APIs', 'SQL Server', 'EF Core', 'C#']
        ).map(tag => (
          <span
            key={tag}
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${t.tag} transition-theme`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={scrollToProjects}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white ${t.accentBg} ${t.accentHover} transition-colors duration-200`}
        >
          {isGame ? 'View Games' : 'View Projects'}
        </button>
        <button
          className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-200 ${
            isGame
              ? 'bg-game-surface border-game-border text-game-text hover:border-game-accent hover:text-game-accent'
              : 'bg-backend-surface border-backend-border text-backend-text hover:border-backend-accent hover:text-backend-accent'
          }`}
        >
          {isGame ? 'Itch.io Profile' : 'Download CV'}
        </button>
      </div>
    </section>
  )
}
