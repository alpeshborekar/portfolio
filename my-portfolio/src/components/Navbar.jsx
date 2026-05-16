import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = [...links.map(l => l.toLowerCase())]

      for (const id of sections.reverse()) {
        const el = document.getElementById(id)

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-[#0c0c0e]/90 backdrop-blur-xl border-b border-[#1e1e22]'
            : ''
        }`}
      >
        <span className="font-display font-bold text-lg text-[#e8e4dc] tracking-tight">
          AB<span className="text-[#f59e0b]">.</span>
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  active === link.toLowerCase()
                    ? 'text-[#f59e0b]'
                    : 'text-[#6b6b7b] hover:text-[#e8e4dc]'
                }`}
              >
                {link}

                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#f59e0b] transition-all duration-300 ${
                    active === link.toLowerCase()
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}

          <li>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium px-4 py-2 rounded-lg border border-[#f59e0b]/30 text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-[#6b6b7b] hover:text-[#e8e4dc] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0c0c0e]/98 backdrop-blur-xl border-b border-[#1e1e22] px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#e8e4dc] font-medium text-base hover:text-[#f59e0b] transition-colors"
              >
                {link}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="text-[#f59e0b] font-medium text-base border border-[#f59e0b]/30 px-4 py-2 rounded-lg w-fit hover:bg-[#f59e0b]/10 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}