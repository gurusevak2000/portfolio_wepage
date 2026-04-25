import React from 'react'
import { useMode } from '../context/ModeContext'
import { backendSkills, gameSkills, gameSystems, devLogs } from '../data/skills'

// ── Shared helpers ────────────────────────────────────────────────────────────

function SectionHeader({ label, title, subtitle, t }) {
  return (
    <div className="mb-8">
      <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${t.muted}`}>{label}</p>
      <h2 className={`text-2xl font-medium tracking-tight ${t.text}`}>{title}</h2>
      {subtitle && <p className={`text-sm mt-1 ${t.muted}`}>{subtitle}</p>}
    </div>
  )
}

// ── Backend: About section ────────────────────────────────────────────────────

export function About() {
  const { isGame, t } = useMode()
  if (isGame) return null

  return (
    <section
      className={`py-12 px-6 max-w-5xl mx-auto border-t border-backend-border transition-theme`}
    >
      <SectionHeader
        label="About"
        title="Building the invisible layer"
        subtitle="Focused on server-side architecture, clean API design, and scalable data systems."
        t={t}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            title: 'API Design',
            body: 'RESTful and minimal-surface APIs built with ASP.NET Core, designed for clarity and long-term maintainability.',
          },
          {
            title: 'System Design',
            body: 'Thoughtful architecture decisions — service separation, request pipelines, and clean domain modelling.',
          },
          {
            title: 'Databases',
            body: 'SQL Server and EF Core for structured data, with attention to schema design and query performance.',
          },
          {
            title: 'DevOps Basics',
            body: 'Git, CI/CD pipelines, Docker basics — keeping delivery smooth and environments reproducible.',
          },
        ].map(card => (
          <div
            key={card.title}
            className="p-5 rounded-xl bg-backend-surface border border-backend-border"
          >
            <p className="text-xs font-medium text-backend-accent mb-1.5">{card.title}</p>
            <p className="text-sm text-backend-muted leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Skills section (both modes) ───────────────────────────────────────────────

export function Skills() {
  const { isGame, t } = useMode()
  const skills = isGame ? gameSkills : backendSkills

  return (
    <section
      className={`py-12 px-6 max-w-5xl mx-auto border-t ${t.sectionBorder} transition-theme`}
    >
      <SectionHeader
        label="Skills"
        title="Technical toolkit"
        subtitle="Core technologies I work with day to day."
        t={t}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {skills.map(group => (
          <div
            key={group.group}
            className={`p-5 rounded-xl border ${
              isGame
                ? 'bg-game-surface border-game-border'
                : 'bg-backend-surface border-backend-border'
            } transition-theme`}
          >
            <p
              className={`text-xs font-medium uppercase tracking-wider mb-3 ${t.accent}`}
            >
              {group.group}
            </p>
            <ul className="flex flex-col gap-2">
              {group.items.map(item => (
                <li key={item} className={`flex items-center gap-2 text-sm ${t.muted}`}>
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      isGame ? 'bg-game-accent' : 'bg-backend-accent'
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Game: Systems section ─────────────────────────────────────────────────────

const SystemIcons = {
  movement: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  ),
  network: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  ai: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </>
  ),
  architecture: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
}

export function GameSystems() {
  const { isGame, t } = useMode()
  if (!isGame) return null

  return (
    <section
      className={`py-12 px-6 max-w-5xl mx-auto border-t border-game-border transition-theme`}
    >
      <SectionHeader
        label="Systems"
        title="Core technical areas"
        subtitle="The systems I design and implement across projects."
        t={t}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gameSystems.map(sys => (
          <div
            key={sys.title}
            className="flex gap-3 p-5 rounded-xl bg-game-surface border border-game-border"
          >
            <div className="w-9 h-9 rounded-lg bg-game-tag flex items-center justify-center flex-shrink-0 border border-game-border">
              <svg className="w-4 h-4 text-game-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {SystemIcons[sys.icon]}
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-game-text">{sys.title}</p>
              <p className="text-xs text-game-muted leading-relaxed mt-1">{sys.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Game: Dev Logs section ────────────────────────────────────────────────────

export function DevLogs() {
  const { isGame } = useMode()
  if (!isGame) return null

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto border-t border-game-border transition-theme">
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-widest mb-1 text-game-muted">Dev Logs</p>
        <h2 className="text-2xl font-medium tracking-tight text-game-text">Process & insights</h2>
        <p className="text-sm mt-1 text-game-muted">Notes from the build.</p>
      </div>

      <div className="flex flex-col">
        {devLogs.map((log, i) => (
          <div key={log.title} className={`flex gap-4 py-4 ${i < devLogs.length - 1 ? 'border-b border-game-border' : ''}`}>
            <div className="flex flex-col items-center pt-1">
              <span className="w-2 h-2 rounded-full bg-game-accent flex-shrink-0" />
              {i < devLogs.length - 1 && (
                <span className="w-px flex-1 bg-game-border mt-1" />
              )}
            </div>
            <div className="min-w-[68px] pt-0.5">
              <span className="text-xs text-game-muted">{log.date}</span>
            </div>
            <div>
              <p className="text-sm text-game-text font-medium">{log.title}</p>
              <p className="text-xs text-game-muted leading-relaxed mt-1">{log.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
