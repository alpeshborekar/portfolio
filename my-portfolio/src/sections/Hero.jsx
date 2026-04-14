import { motion } from 'framer-motion'
import alpeshImg from '../assets/alpesh.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#22c55e]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6 relative"
      >
        <div className="w-32 h-32 rounded-full ring-4 ring-[#6366f1]/40 ring-offset-4 ring-offset-[#0f172a] overflow-hidden shadow-xl shadow-[#6366f1]/20">
          <img
            src={alpeshImg}
            alt="Alpesh Borekar"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#22c55e] rounded-full border-2 border-[#0f172a]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4"
      >
        Open to Internship Opportunities
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-5xl md:text-7xl font-extrabold text-[#e2e8f0] leading-tight"
      >
        Hi, I'm <span className="text-[#6366f1]">Alpesh Borekar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl md:text-2xl text-[#94a3b8] font-light"
      >
        Backend-Focused Full Stack Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-2xl text-[#64748b] text-base leading-relaxed"
      >
        I design and ship production-ready APIs, secure authentication systems,
        and full-stack web applications — from architecture to deployment.
      </motion.p>

      {/* 3 Highlight Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 flex flex-wrap justify-center gap-3"
      >
        {[
          '⚡ REST APIs · JWT · RBAC',
          '🛠️ Node.js · MongoDB · React',
          '🚀 Deployed on Vercel & Render',
        ].map((item) => (
          <span
            key={item}
            className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#94a3b8] backdrop-blur-sm"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-[#6366f1] text-white font-semibold hover:bg-[#4f46e5] transition-colors duration-200 shadow-lg shadow-[#6366f1]/20"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-[#6366f1]/40 text-[#6366f1] font-semibold hover:bg-[#6366f1]/10 transition-colors duration-200"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}