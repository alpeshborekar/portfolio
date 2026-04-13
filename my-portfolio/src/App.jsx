import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-[#e2e8f0]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}