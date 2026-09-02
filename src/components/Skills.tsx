import { useMemo, useState } from "react"
import { featuredProjects, skills } from "../content"

const SKILL_LANES = ["Languages I ship with", "Frameworks I reach for", "Data tools I trust"]

export function Skills() {
  const [active, setActive] = useState<string | null>(null)

  const related = useMemo(() => {
    if (!active) return []
    return featuredProjects.filter((p) =>
      p.stack.some((s) => s.toLowerCase().includes(active.toLowerCase()) || active.toLowerCase().includes(s.toLowerCase())),
    )
  }, [active])

  return (
    <section className="section" id="skills">
      <div className="section__head">
        <p className="eyebrow">Skills</p>
        <h2>Click a chip — I’ll tell you where it’s shown up.</h2>
      </div>
      <div className="skills-layout">
        <div className="skill-groups">
          {skills.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>
                <span>{group.label}</span>
                <small>{group.items.length} items</small>
              </h3>
              <div className="chip-row chip-row--wrap">
                {group.items.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`chip chip--btn ${active === item.name ? "is-on" : ""}`}
                    onClick={() => setActive(active === item.name ? null : item.name)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <aside className="skill-detail" aria-live="polite">
          {active ? (
            <>
              <p className="eyebrow">Selected Skill</p>
              <h3>{active}</h3>
              <p>
                {skills.flatMap((g) => g.items).find((i) => i.name === active)?.usedIn}
              </p>
              {related.length > 0 && (
                <ul>
                  {related.map((p) => (
                    <li key={p.id}>
                      <a href="#projects">{p.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              <p className="eyebrow">Pick A Skill</p>
              <h3>Stack with receipts.</h3>
              <p className="muted">
                Every chip points back to something concrete: a shipped app, an internship workflow,
                or a class project that taught me how I like to build.
              </p>
              <div className="skill-legend">
                {SKILL_LANES.map((lane) => (
                  <span key={lane}>{lane}</span>
                ))}
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}
