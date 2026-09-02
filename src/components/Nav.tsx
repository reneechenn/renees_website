import { profile } from "../content"

const DESK_NOTES = [
  "Draft rooms and sports data.",
  "Music tools that react in real time.",
  "Interfaces with a little game logic.",
]

export function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top">
        Renee
        <span>Chen</span>
      </a>
      <div className="nav__intro">
        <p className="eyebrow">New York · CS @ Stony Brook</p>
        <p className="nav__lede">
          Playful full-stack builder with product instincts, support patience, and a thing for tools
          people can actually use.
        </p>
      </div>
      <div className="sidebar-card sidebar-card--identity">
        <div className="sidebar-card__stamp" aria-hidden="true">
          <span>RC</span>
        </div>
        <div>
          <p className="eyebrow">Open For</p>
          <strong>Connections, collaborations, and interesting work</strong>
          <p className="muted">Roles, projects, and ideas worth building are all fair game.</p>
        </div>
      </div>
      <nav className="nav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="sidebar-card">
        <p className="eyebrow">On The Desk</p>
        <ul className="sidebar-list">
          {DESK_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
      <div className="nav__actions">
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  )
}
