import { About } from "./components/About"
import { CartDock } from "./components/CartDock"
import { Contact } from "./components/Contact"
import { Cursor } from "./components/Cursor"
import { Experience } from "./components/Experience"
import { Hero } from "./components/Hero"
import { HuntField } from "./components/HuntField"
import { Nav } from "./components/Nav"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { HuntProvider } from "./hunt"

function Shell() {
  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="page-shell">
        <Nav />
        <div className="page-main">
          <main className="page-content">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <HuntField />
          </main>
          <footer className="site-foot">
            <p>Built to feel closer to a desk full of notes than a polished brochure.</p>
          </footer>
        </div>
      </div>
      <CartDock />
    </>
  )
}

export default function App() {
  return (
    <HuntProvider>
      <Shell />
    </HuntProvider>
  )
}
