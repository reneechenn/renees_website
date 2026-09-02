import { about, education } from "../content"

const STATS = [
  {
    label: "Experience",
    value: "4 roles",
    text: "City IT, production, support, and education.",
  },
  {
    label: "Build Pattern",
    value: "UI + data",
    text: "I usually care about the workflow and the interface at the same time.",
  },
  {
    label: "Default Goal",
    value: "Useful fast",
    text: "I want a project to make sense on the first click, not just in a demo.",
  },
]

const WORK_STYLE = [
  "Translate messy processes into clearer screens and simpler data flows.",
  "Build with enough structure that people can recover when plans change.",
  "Keep room for motion and surprise so the product still feels alive.",
]

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__head">
        <p className="eyebrow">About</p>
        <h2>Details, minus the recap-email energy.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">{about.lead}</p>
          <p>{about.body}</p>
          <div className="stat-row">
            {STATS.map((stat) => (
              <article key={stat.label} className="stat-card">
                <p className="eyebrow">{stat.label}</p>
                <strong>{stat.value}</strong>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="about-stack">
          <article className="edu-card">
            <p className="eyebrow">Education</p>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p className="muted">
              {education.place} · {education.dates}
            </p>
          </article>
          <article className="note-card note-card--olive">
            <p className="eyebrow">How I Work</p>
            <ul className="note-list">
              {WORK_STYLE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
