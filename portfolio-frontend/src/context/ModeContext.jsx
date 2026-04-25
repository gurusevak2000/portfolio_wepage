import React, { createContext, useContext, useState } from 'react'

const ModeContext = createContext(null)

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('backend') // 'backend' | 'game'

  const isGame = mode === 'game'
  const isBackend = mode === 'backend'

  // Theme-aware class helpers
  const t = {
    bg:       isGame ? 'bg-game-bg'      : 'bg-backend-bg',
    surface:  isGame ? 'bg-game-surface' : 'bg-backend-surface',
    card:     isGame ? 'bg-game-card border-game-border'    : 'bg-backend-card border-backend-border',
    border:   isGame ? 'border-game-border'  : 'border-backend-border',
    text:     isGame ? 'text-game-text'  : 'text-backend-text',
    muted:    isGame ? 'text-game-muted' : 'text-backend-muted',
    accent:   isGame ? 'text-game-accent'    : 'text-backend-accent',
    accentBg: isGame ? 'bg-game-accent'      : 'bg-backend-accent',
    accentHover: isGame ? 'hover:bg-game-accent2' : 'hover:bg-backend-accent2',
    tag:      isGame ? 'bg-game-tag text-game-tagText' : 'bg-backend-tag text-backend-tagText',
    sectionBorder: isGame ? 'border-game-border' : 'border-backend-border',
  }

  return (
    <ModeContext.Provider value={{ mode, setMode, isGame, isBackend, t }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode must be used inside ModeProvider')
  return ctx
}
