import { huntItems } from "../content"
import { useHunt } from "../hunt"

export function CartDock() {
  const { found, complete, prize, reset, round } = useHunt()

  return (
    <aside className={`cart-dock ${complete ? "is-complete" : ""}`} aria-live="polite">
      <div className="cart-dock__top">
        <p className="cart-dock__label">Aisle hunt</p>
        <span className="cart-dock__round">Round {round + 1}</span>
      </div>
      <div className={`cart-dock__slots ${complete ? "is-complete" : ""}`}>
        {huntItems.map((item) => {
          const got = found.includes(item.id)
          return (
            <span
              key={item.id}
              className={`cart-slot ${got ? "is-on" : ""}`}
              title={got ? item.label : item.hint}
            >
              {got ? (complete ? "✦" : "●") : "○"}
            </span>
          )
        })}
      </div>
      <p className="cart-dock__status">
        {complete ? "Cart full. Prize unlocked." : `${found.length}/${huntItems.length} collected`}
      </p>
      {complete && (
        <div className="prize-card">
          <p className="eyebrow">{prize.kicker}</p>
          <strong>{prize.title}</strong>
          <p>{prize.body}</p>
          <div className="cart-dock__actions">
            <a className="text-btn" href={prize.target}>
              {prize.cta}
            </a>
            <button type="button" className="text-btn" onClick={reset}>
              Play another round
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
