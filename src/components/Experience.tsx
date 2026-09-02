import { useState } from "react"
import { experience } from "../content"

const EXPERIENCE_LANES = ["IT systems", "Operations", "Production logistics", "Education support"]

export function Experience() {
  const [open, setOpen] = useState(experience[0]?.id ?? "")

  return (
    <section className="section" id="experience">
      <div className="section__head">
        <p className="eyebrow">Experience</p>
        <h2>Internships across IT, production, and education.</h2>
        <p className="muted">
          The common thread is learning how real teams work when the process is half-documented and
          the deadline still shows up anyway.
        </p>
      </div>
      <div className="experience__summary">
        {EXPERIENCE_LANES.map((lane) => (
          <span key={lane} className="chip">
            {lane}
          </span>
        ))}
      </div>
      <ol className="timeline">
        {experience.map((job) => {
          const isOpen = open === job.id
          return (
            <li key={job.id} className={`timeline__item ${isOpen ? "is-open" : ""}`} style={{ position: "relative" }}>
              <button
                type="button"
                className="timeline__btn"
                onClick={() => setOpen(isOpen ? "" : job.id)}
                aria-expanded={isOpen}
              >
                <span className="timeline__dot" />
                <span className="timeline__meta">
                  <strong>{job.role}</strong>
                  <em>
                    {job.org} · {job.place}
                  </em>
                </span>
                <span className="timeline__dates">{job.dates}</span>
              </button>
              {isOpen && (
                <div className="timeline__body">
                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="chip-row">
                    {job.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
