import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'
import alpeshImg from '../assets/alpesh.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-24 pb-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#e8e4dc 1px, transparent 1px), linear-gradient(90deg, #e8e4dc 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#10b981]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-0">

          {/* Left */}
          <div className="flex-1 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />

              <span className="text-[#10b981] text-xs font-medium tracking-wide">
                Available for Internship
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[#e8e4dc] leading-[1.05] mb-4"
            >
              Alpesh
              <br />
              <span className="text-[#f59e0b]">Borekar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl text-[#6b6b7b] font-medium mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Backend-Focused Full Stack Developer —{' '}
              <span className="text-[#e8e4dc]">
                building scalable APIs,
              </span>{' '}
              secure systems and production-grade applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start"
            >
              {['Node.js', 'Flask', 'MongoDB', 'React', 'JWT + RBAC', 'Gemini AI'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-md bg-[#141416] border border-[#1e1e22] text-[#6b6b7b] font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#f59e0b] text-[#0c0c0e] font-semibold text-sm hover:bg-[#f59e0b]/90 transition-all duration-200 text-center shadow-lg shadow-[#f59e0b]/20"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-[#1e1e22] text-[#e8e4dc] font-semibold text-sm hover:border-[#f59e0b]/40 hover:text-[#f59e0b] transition-all duration-200 text-center"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-[#1e1e22] text-[#6b6b7b] font-semibold text-sm hover:text-[#e8e4dc] transition-all duration-200 text-center"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/alpeshborekar"
                target="_blank"
                rel="noreferrer"
                className="text-[#6b6b7b] hover:text-[#e8e4dc] transition-colors"
              >
                <FiGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/alpesh-borekar"
                target="_blank"
                rel="noreferrer"
                className="text-[#6b6b7b] hover:text-[#e8e4dc] transition-colors"
              >
                <FiLinkedin size={18} />
              </a>

              <span className="w-16 h-px bg-[#1e1e22]" />

              <span className="text-xs text-[#6b6b7b]">
                alpeshborekar33@gmail.com
              </span>
            </motion.div>

          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">

              <div className="absolute inset-0 rounded-2xl border border-[#f59e0b]/20 rotate-6" />

              <div className="absolute inset-0 rounded-2xl border border-[#10b981]/10 -rotate-3" />

              <img
                src={alpeshImg}
                alt="Alpesh Borekar"
                className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#f59e0b]/10 rounded-xl border border-[#f59e0b]/20 z-0" />

            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#6b6b7b] hover:text-[#f59e0b] transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">
              Scroll
            </span>

            <FiArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}