import type { CSSProperties } from "react"
import { useHunt } from "../hunt"
import type { HuntId } from "../content"

const glyphs: Record<HuntId, string> = {
  list: "☰",
  badge: "◆",
  disc: "◎",
  chip: "▣",
}

const winGlyphs: Record<HuntId, string> = {
  list: "✦",
  badge: "✶",
  disc: "★",
  chip: "✹",
}

export function HuntItem({
  id,
}: {
  id: HuntId
}) {
  const { found, find, complete, placementFor } = useHunt()
  const already = found.includes(id)
  const glyph = complete && already ? winGlyphs[id] : glyphs[id]
  const placement = placementFor(id)
  const style = {
    "--hunt-x": placement.x,
    "--hunt-y": placement.y,
    "--hunt-rotate": placement.rotate,
    "--hunt-scale": placement.scale,
  } as CSSProperties

  return (
    <button
      type="button"
      className={`hunt-item ${already ? "is-found" : ""} ${complete ? "is-complete" : ""}`}
      onClick={() => find(id)}
      aria-label={complete && already ? `Collected ${id} token` : already ? "Already collected" : `Collect ${id}`}
      style={style}
    >
      <span aria-hidden="true">{glyph}</span>
    </button>
  )
}
