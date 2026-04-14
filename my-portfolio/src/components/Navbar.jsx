import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = ['About', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
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

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-[#94a3b8]">
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#6366f1] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4 md:hidden"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#94a3b8] hover:text-[#6366f1] transition-colors text-base font-medium py-1"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}