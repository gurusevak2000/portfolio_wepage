import React from 'react'
import { useMode } from '../context/ModeContext'
import { backendProjects, gameProjects } from '../data/projects'

function SectionHeader({ label, title, subtitle, t, isGame }) {
  return (
    <div className="mb-8">
      <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${t.muted}`}>{label}</p>
      <h2 className={`text-2xl font-medium tracking-tight ${t.text}`}>{title}</h2>
      {subtitle && <p className={`text-sm mt-1 ${t.muted}`}>{subtitle}</p>}
    </div>
  )
}

function BackendCard({ project, t, isGame }) {
  const cardBase = isGame
    ? 'bg-game-card border-game-border hover:border-game-accent'
    : 'bg-backend-card border-backend-border hover:border-backend-accent'

  return (
    <div
      className={`flex flex-col gap-3 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${cardBase}`}
    >
      {/* Icon placeholder */}
      <div
        className={`w-full h-20 rounded-lg flex items-center justify-center ${
          isGame ? 'bg-game-surface' : 'bg-backend-surface'
        } border ${isGame ? 'border-game-border' : 'border-backend-border'}`}
      >
        <svg className={`w-8 h-8 ${t.muted}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M7 7h10M7 11h6" />
        </svg>
      </div>

      <div>
        <h3 className={`text-sm font-medium ${t.text}`}>{project.title}</h3>
        <p className={`text-xs mt-1 leading-relaxed ${t.muted}`}>{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(s => (
          <span key={s} className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.tag}`}>
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto pt-1">
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-3 py-1.5 text-xs font-medium rounded-md text-white ${t.accentBg} ${t.accentHover} transition-colors`}
        >
          View Code
        </a>
        <button
          className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
            isGame
              ? 'border-game-border text-game-muted hover:border-game-accent hover:text-game-accent bg-game-surface'
              : 'border-backend-border text-backend-muted hover:border-backend-accent hover:text-backend-accent bg-backend-surface'
          }`}
        >
          Details
        </button>
      </div>
    </div>
  )
}

function GameCard({ project, t }) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-game-border bg-game-card hover:border-game-accent transition-all duration-300 hover:-translate-y-0.5">
      {/* Game screenshot placeholder */}
      <div
        className={`w-full h-24 rounded-lg bg-gradient-to-br ${project.placeholderColor} flex flex-col items-center justify-center gap-1 border border-game-border`}
      >
        <svg className="w-7 h-7 text-game-accent opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
        <span className="text-[10px] text-game-accent opacity-60">{project.title}</span>
      </div>

      <div>
        <h3 className="text-sm font-medium text-game-text">{project.title}</h3>
        <p className="text-xs mt-1 leading-relaxed text-game-muted">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(s => (
          <span key={s} className="text-xs font-medium px-2 py-0.5 rounded-full bg-game-tag text-game-tagText">
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto pt-1">
        <a
          href={project.demoUrl}
          className="px-3 py-1.5 text-xs font-medium rounded-md text-white bg-game-accent hover:bg-game-accent2 transition-colors"
        >
          View Demo
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-xs font-medium rounded-md border border-game-border text-game-muted hover:border-game-accent hover:text-game-accent bg-game-surface transition-colors"
        >
          View Code
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const { isGame, t } = useMode()

  return (
    <section
      id="projects"
      className={`py-12 px-6 max-w-5xl mx-auto border-t ${t.sectionBorder} transition-theme`}
    >
      <SectionHeader
        label="Projects"
        title={isGame ? 'Games & experiments' : 'Selected backend work'}
        subtitle={isGame ? 'Built in Unity, focused on networked gameplay and solid systems.' : 'Real systems, clean code, practical solutions.'}
        t={t}
        isGame={isGame}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isGame
          ? gameProjects.map(p => <GameCard key={p.id} project={p} t={t} />)
          : backendProjects.map(p => <BackendCard key={p.id} project={p} t={t} isGame={isGame} />)}
      </div>
    </section>
  )
}
