import { huntItems } from "../content"
import { HuntItem } from "./HuntItem"

export function HuntField() {
  return (
    <div className="hunt-field" aria-label="Hidden item hunt">
      {huntItems.map((item) => (
        <HuntItem key={item.id} id={item.id} />
      ))}
    </div>
  )
}
