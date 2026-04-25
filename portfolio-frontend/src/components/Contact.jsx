import React from 'react'
import { useMode } from '../context/ModeContext'
import { useContactForm } from '../hooks/useContactForm'

export default function Contact() {
  const { isGame, t } = useMode()
  const { form, status, errorMsg, handleChange, handleSubmit } = useContactForm()

  const inputClass = `w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200 ${
    isGame
      ? 'bg-game-surface border-game-border text-game-text placeholder-game-muted focus:border-game-accent'
      : 'bg-backend-surface border-backend-border text-backend-text placeholder-backend-muted focus:border-backend-accent'
  }`

  const labelClass = `block text-xs font-medium mb-1.5 ${t.muted}`

  return (
    <section
      id="contact"
      className={`py-12 px-6 max-w-5xl mx-auto border-t ${t.sectionBorder} transition-theme`}
    >
      <div className="mb-8">
        <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${t.muted}`}>Contact</p>
        <h2 className={`text-2xl font-medium tracking-tight ${t.text}`}>
          {isGame ? "Let's collaborate" : 'Get in touch'}
        </h2>
        <p className={`text-sm mt-1 ${t.muted}`}>
          {isGame
            ? 'Open to game dev projects, jam teams, and contract work.'
            : 'Available for freelance work and full-time roles.'}
        </p>
      </div>

      {status === 'success' ? (
        <div
          className={`p-5 rounded-xl border ${
            isGame
              ? 'bg-game-surface border-game-border'
              : 'bg-backend-surface border-backend-border'
          }`}
        >
          <p className={`text-sm font-medium ${t.accent}`}>Message sent!</p>
          <p className={`text-xs mt-1 ${t.muted}`}>Thanks for reaching out — I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className={labelClass}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={
                isGame
                  ? 'Tell me about your project or idea...'
                  : 'Tell me about your project...'
              }
              required
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === 'error' && (
            <p className="text-xs text-red-500 mb-3">{errorMsg}</p>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors duration-200 disabled:opacity-60 ${
                isGame
                  ? 'bg-game-accent hover:bg-game-accent2'
                  : 'bg-backend-accent hover:bg-backend-accent2'
              }`}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            <span className={`text-xs ${t.muted}`}>
              {isGame ? 'Also on Discord: alexmercer#0001' : 'Usually responds within 24h'}
            </span>
          </div>
        </form>
      )}
    </section>
  )
}
