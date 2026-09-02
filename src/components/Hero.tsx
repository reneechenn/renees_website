import { useRef, useState, type FormEvent, type KeyboardEvent } from "react"
import { profile } from "../content"

type Line = { kind: "in" | "out" | "sys"; text: string }

const BUILD_MAP = [
  { name: "DraftIQ", note: "live draft logic and team comparisons" },
  { name: "LyricsLens", note: "music context with translation in the loop" },
  { name: "Marketplace Hunt", note: "game feel, progression, and UI playfulness" },
]

const FIELD_NOTES = [
  "I like tools that still make sense once real users touch them.",
  "Data cleanup and interface polish usually belong in the same conversation.",
  "If a page can feel a little playful without getting messy, I will try it.",
]

const HELP = [
  "whoami        — short intro",
  "ls            — site map",
  "open <place>  — about | experience | projects | skills | contact",
  "github        — open GitHub",
  "resume        — download PDF",
  "hunt          — how the aisle hunt works",
  "clear         — wipe the terminal",
  "help          — this list",
]

export function Hero() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "sys", text: "renee@stonybrook — portfolio shell v1.0" },
    { kind: "sys", text: "type help to look around. click anything. collect four hidden aisle items." },
    { kind: "in", text: "whoami" },
    { kind: "out", text: "Renee Chen · CS @ Stony Brook · builder of draft rooms, playlists, and games" },
  ])
  const [value, setValue] = useState("")
  const input = useRef<HTMLInputElement>(null)
  const history = useRef<string[]>(["whoami"])
  const histIdx = useRef(-1)
  const prompt = "renee ~ %"

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase()
    const next: Line[] = [...lines, { kind: "in", text: raw }]
    if (!cmd) {
      setLines(next)
      return
    }
    history.current.push(raw)
    histIdx.current = -1

    if (cmd === "clear") {
      setLines([{ kind: "sys", text: "cleared." }])
      return
    }
    if (cmd === "help") {
      HELP.forEach((t) => next.push({ kind: "out", text: t }))
    } else if (cmd === "whoami") {
      next.push({
        kind: "out",
        text: "CS major who interned in city IT, production, help desk, and education. Graduating May 2027.",
      })
    } else if (cmd === "ls") {
      next.push({ kind: "out", text: "about/  experience/  projects/  skills/  contact/  resume.pdf" })
    } else if (cmd.startsWith("open ")) {
      const place = cmd.slice(5).trim()
      const map: Record<string, string> = {
        about: "#about",
        experience: "#experience",
        projects: "#projects",
        skills: "#skills",
        contact: "#contact",
      }
      if (map[place]) {
        document.querySelector(map[place])?.scrollIntoView({ behavior: "smooth" })
        next.push({ kind: "out", text: `opening ${place}…` })
      } else {
        next.push({ kind: "out", text: `unknown path: ${place}` })
      }
    } else if (cmd === "github") {
      window.open(profile.github, "_blank")
      next.push({ kind: "out", text: profile.github })
    } else if (cmd === "resume") {
      window.open(profile.resume, "_blank")
      next.push({ kind: "out", text: "opening resume.pdf" })
    } else if (cmd === "hunt") {
      next.push({
        kind: "out",
        text: "Four glowing tokens are hidden on the page. Click them. Fill the cart in the corner. Inspired by Marketplace Hunt.",
      })
    } else {
      next.push({ kind: "out", text: `command not found: ${raw}  (try help)` })
    }
    setLines(next)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    run(value)
    setValue("")
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return
    e.preventDefault()
    const h = history.current
    if (!h.length) return
    if (e.key === "ArrowUp") {
      histIdx.current = histIdx.current < 0 ? h.length - 1 : Math.max(0, histIdx.current - 1)
    } else {
      histIdx.current = Math.min(h.length - 1, histIdx.current + 1)
    }
    setValue(h[histIdx.current] ?? "")
  }

  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">Portfolio, but built more like a desk than a pitch deck</p>
        <h1>
          Hi, I’m <em>Renee</em>.
          <br />
          I make software that feels structured up close and playful on contact.
        </h1>
        <p className="lede">
          I’m a CS student in New York building full-stack apps, data tools, and game-ish interfaces.
          This site is still a playground, just with more of my actual taste in it. Try the terminal
          and hunt for hidden items floating around the page.
        </p>
        <div className="hero__meta">
          <span>Class of 2027</span>
          <span>New York based</span>
          <span>React, TypeScript, data-heavy products</span>
        </div>
        <div className="hero__cta">
          <a className="btn" href="#projects">
            See projects
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="hero__board">
        <article className="hero-card hero-card--portrait">
          <p className="eyebrow">Desk Snapshot</p>
          <div className="portrait-badge" aria-hidden="true">
            <span>RC</span>
          </div>
          <p className="hero-card__caption">
            Student builder with product taste, support instincts, and a soft spot for game mechanics.
          </p>
        </article>

        <article className="hero-card hero-card--map">
          <p className="eyebrow">Build Map</p>
          <div className="build-map">
            {BUILD_MAP.map((item) => (
              <div key={item.name} className="build-map__node">
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="hero-card hero-card--notes">
          <p className="eyebrow">Field Notes</p>
          <ul className="note-list">
            {FIELD_NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>

        <div className="term hero__term" onClick={() => input.current?.focus()}>
          <div className="term__bar">
            <span />
            <span />
            <span />
            <p>zsh — reneechenn</p>
          </div>
          <div className="term__body">
            {lines.map((line, i) => (
              <p key={i} className={`term__line term__line--${line.kind}`}>
                {line.kind === "in" && <span className="term__prompt">{prompt} </span>}
                {line.text}
              </p>
            ))}
            <form onSubmit={onSubmit} className="term__form">
              <label className="sr-only" htmlFor="term-input">
                Terminal command
              </label>
              <span className="term__prompt">{prompt}</span>
              <input
                id="term-input"
                ref={input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKey}
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
