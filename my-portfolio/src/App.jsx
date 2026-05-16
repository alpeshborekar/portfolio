import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="bg-[#0c0c0e] min-h-screen text-[#e8e4dc] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}