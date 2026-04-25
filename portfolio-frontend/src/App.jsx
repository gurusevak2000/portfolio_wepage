import React, { useEffect, useState } from 'react'
import { ModeProvider, useMode } from './context/ModeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { About, Skills, GameSystems, DevLogs } from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Portfolio() {
  const { isGame, t } = useMode()
  const [visible, setVisible] = useState(true)
  const [prevIsGame, setPrevIsGame] = useState(isGame)

  // Fade out → swap → fade in on mode change
  useEffect(() => {
    if (isGame !== prevIsGame) {
      setVisible(false)
      const timer = setTimeout(() => {
        setPrevIsGame(isGame)
        setVisible(true)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isGame, prevIsGame])

  return (
    <div
      className={`min-h-screen transition-theme ${isGame ? 'bg-game-bg' : 'bg-backend-bg'
        }`}
    >
      <Navbar />
      <main
        className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GameSystems />
        <DevLogs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ModeProvider>
      <Portfolio />
    </ModeProvider>
  )
}
