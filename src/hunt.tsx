import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { huntItems, huntPrizes, type HuntId, type HuntPrize } from "./content"

type HuntPlacement = {
  x: string
  y: string
  rotate: string
  scale: string
}

function createRng(seed: number) {
  let t = seed

  return () => {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), t | 1)
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function nextSeed(except: number) {
  let next = except
  while (next === except) {
    next = Math.floor(Math.random() * 1_000_000_000)
  }
  return next
}

function shuffle<T>(items: T[], random: () => number) {
  const next = [...items]

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    ;[next[i], next[j]] = [next[j]!, next[i]!]
  }

  return next
}

function buildPlacements(seed: number) {
  const random = createRng(seed)
  const order = shuffle(
    huntItems.map((item) => item.id),
    random,
  )

  return order.reduce<Record<HuntId, HuntPlacement>>((acc, id, index) => {
    const bandStart = 11 + index * 21
    const x = 10 + random() * 80
    const y = bandStart + random() * 11
    const rotate = `${Math.round(-16 + random() * 32)}deg`
    const scale = (0.92 + random() * 0.24).toFixed(2)

    acc[id] = {
      x: `${x.toFixed(1)}%`,
      y: `${y.toFixed(1)}%`,
      rotate,
      scale,
    }

    return acc
  }, {} as Record<HuntId, HuntPlacement>)
}

type HuntContextValue = {
  found: HuntId[]
  find: (id: HuntId) => void
  complete: boolean
  prize: HuntPrize
  placementFor: (id: HuntId) => HuntPlacement
  round: number
  reset: () => void
}

const HuntContext = createContext<HuntContextValue | null>(null)

export function HuntProvider({ children }: { children: ReactNode }) {
  const [found, setFound] = useState<HuntId[]>([])
  const [round, setRound] = useState(0)
  const [layoutSeed, setLayoutSeed] = useState(() => nextSeed(-1))
  const placements = useMemo(() => buildPlacements(layoutSeed), [layoutSeed])

  const value = useMemo<HuntContextValue>(
    () => ({
      found,
      find: (id) =>
        setFound((prev) => (prev.includes(id) ? prev : [...prev, id])),
      complete: found.length === huntItems.length,
      prize: huntPrizes[round % huntPrizes.length]!,
      placementFor: (id) => placements[id],
      round,
      reset: () => {
        setFound([])
        setRound((prev) => prev + 1)
        setLayoutSeed((prev) => nextSeed(prev))
      },
    }),
    [found, placements, round],
  )

  return <HuntContext.Provider value={value}>{children}</HuntContext.Provider>
}

export function useHunt() {
  const ctx = useContext(HuntContext)
  if (!ctx) throw new Error("useHunt must be used inside HuntProvider")
  return ctx
}

export type { HuntPlacement }
