import { useEffect, useState } from "react"
import { featuredProjects, profile } from "../content"

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  homepage: string | null
  fork: boolean
  updated_at: string
}

export function LiveGithub() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=20`, {
      signal: ctrl.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error("github")
        return r.json() as Promise<Repo[]>
      })
      .then((data) => setRepos(data))
      .catch(() => setError(true))
    return () => ctrl.abort()
  }, [])

  const featured = new Set(featuredProjects.map((p) => p.repo))

  return (
    <div className="github-live">
      <div className="github-live__head">
        <h3>Live from GitHub</h3>
        <p>Pulled from @{profile.githubUser} so this list stays current.</p>
      </div>
      {error && <p className="muted">GitHub is quiet right now — featured projects above still work.</p>}
      {!repos && !error && <p className="muted">Fetching repositories…</p>}
      {repos && (
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <span>
                  {repo.name}
                  {featured.has(repo.name) && <em>featured</em>}
                  {repo.fork && <em>fork</em>}
                </span>
                <small>{repo.description ?? "No description"}</small>
              </a>
              <div>
                {repo.language && <span>{repo.language}</span>}
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer">
                    demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
