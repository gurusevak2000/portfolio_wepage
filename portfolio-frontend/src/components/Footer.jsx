import React from 'react'
import { useMode } from '../context/ModeContext'

export default function Footer() {
  const { isGame, t } = useMode()

  return (
    <footer
      className={`border-t py-6 px-6 text-center ${t.sectionBorder} ${t.muted} text-xs transition-theme`}
    >
      <p>
        © {new Date().getFullYear()} Alex Mercer ·{' '}
        {isGame ? 'Game Developer' : 'Backend Developer'}
      </p>
      <p className="mt-1 opacity-60">
        Built with React + Tailwind · API with ASP.NET Core
      </p>
    </footer>
  )
}
