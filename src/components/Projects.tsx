import { useRef, type PointerEvent } from "react"
import { featuredProjects, relatedRepos, type Project } from "../content"
import { LiveGithub } from "./LiveGithub"

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * -10
    const ry = (px - 0.5) * 12
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    el.style.setProperty("--gx", `${px * 100}%`)
    el.style.setProperty("--gy", `${py * 100}%`)
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = "rotateX(0) rotateY(0)"
  }

  return (
    <article
      ref={ref}
      className={`project-card project-card--${index + 1}`}
      style={{ ["--accent" as string]: project.accent }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="project-card__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="project-card__topline">
        <p className="eyebrow">0{index + 1}</p>
        <span className="project-card__status">{project.live ? "Playable now" : "Code-first build"}</span>
      </div>
      <div className="project-card__visual" aria-hidden="true">
        <div className="project-card__screen">
          <span />
          <span />
          <span />
        </div>
      </div>
      <header>
        <h3>{project.name}</h3>
        <p className="project-card__blurb">{project.blurb}</p>
      </header>
      <p className="project-card__details">{project.details}</p>
      <ul className="chip-row">
        {project.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>
      <footer>
        <a href={project.github} target="_blank" rel="noreferrer">
          Code
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
      </footer>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__head">
        <p className="eyebrow">Projects</p>
        <h2>From GitHub, but arranged like the ones already spread across my desk.</h2>
      </div>
      <div className="project-grid">
        {featuredProjects.map((p, i) => (
          <TiltCard key={p.id} project={p} index={i} />
        ))}
      </div>
      <p className="related">
        Also worth opening:{" "}
        {relatedRepos.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer">
            {r.name}
          </a>
        ))}
        <span> — {relatedRepos[0]?.note}</span>
      </p>
      <LiveGithub />
    </section>
  )
}
