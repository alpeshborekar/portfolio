import { motion } from 'framer-motion'
import alpeshImg from '../assets/alpesh.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden pt-24 pb-12"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#6366f1]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#22c55e]/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6 relative"
      >
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full ring-4 ring-[#6366f1]/40 ring-offset-4 ring-offset-[#0f172a] overflow-hidden shadow-xl shadow-[#6366f1]/20">
          <img
            src={alpeshImg}
            alt="Alpesh Borekar"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-1 right-1 w-3 h-3 sm:w-4 sm:h-4 bg-[#22c55e] rounded-full border-2 border-[#0f172a]" />
      </motion.div>

      {/* Available badge */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#22c55e] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
      >
        Actively Seeking Internship Opportunities
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#e2e8f0] leading-tight"
      >
        Hi, I'm <span className="text-[#6366f1]">Alpesh Borekar</span>
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-[#94a3b8] font-light px-2"
      >
        Backend-Focused Full Stack Developer{' '}
        <span className="text-[#64748b] text-base sm:text-lg block sm:inline mt-1 sm:mt-0">
          specializing in scalable API systems
        </span>
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-xl text-[#94a3b8] text-sm sm:text-base leading-relaxed px-2"
      >
        I build scalable APIs, secure authentication systems, and production-ready
        web applications — from backend architecture to deployment.
      </motion.p>

      {/* Bullets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 flex flex-col items-start gap-2 text-xs sm:text-sm text-[#94a3b8] px-2 w-full max-w-sm sm:max-w-md"
      >
        {[
          '✔ Built 3+ full-stack projects with real-world use cases',
          '✔ Experienced in JWT authentication, RBAC, REST APIs',
          '✔ Actively seeking backend / full stack internship opportunities',
        ].map((item) => (
          <span key={item} className="text-left">{item}</span>
        ))}
      </motion.div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.78 }}
        className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 px-2"
      >
        {[
          '⚡ REST APIs · JWT Auth · RBAC',
          '🛠️ Node.js · MongoDB · React',
          '🚀 Deployed (Vercel + Render)',
        ].map((item) => (
          <span
            key={item}
            className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[#94a3b8] backdrop-blur-sm"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* ✅ FIXED CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <a
          href="#projects"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#6366f1] text-white font-semibold hover:bg-[#4f46e5] transition-colors duration-200 shadow-lg shadow-[#6366f1]/20"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border border-[#6366f1]/40 text-[#818cf8] font-semibold hover:bg-[#6366f1]/10 hover:border-[#6366f1] transition-all duration-200"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}