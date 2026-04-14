import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0f172a]/80 border-b border-white/5 shadow-lg' : ''
      }`}
    >
      <span className="text-[#6366f1] font-bold text-xl tracking-tight">
        &lt;Alpesh /&gt;
      </span>

      <ul className="flex gap-6 text-sm font-medium text-[#94a3b8]">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#6366f1] transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}