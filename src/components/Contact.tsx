import { profile } from "../content"

const CONTACT_NOTES = [
  {
    title: "Best For",
    headline: "Internships, product ideas, and project walkthroughs.",
    body: "If you want to talk through how something works or what I should build next, that is usually a good email.",
  },
  {
    title: "Reply Style",
    headline: "Clear, fast, and usually with links.",
    body: "I tend to answer with context, repo links, or a concrete next step instead of a vague maybe.",
  },
]

export function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Want to talk internships, projects, or a weird product idea?</h2>
          <p className="lede">I’m based in New York and usually a short email away.</p>
          <div className="contact-row">
            <a className="btn" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p className="fineprint">Phone is on the resume if you need it. I keep it off the public page.</p>
        </div>
        <div className="contact-notes">
          {CONTACT_NOTES.map((note) => (
            <article key={note.title} className="contact-note">
              <p className="eyebrow">{note.title}</p>
              <strong>{note.headline}</strong>
              <p className="muted">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
