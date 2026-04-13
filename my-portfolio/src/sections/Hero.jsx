import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#22c55e]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4"
      >
        Welcome to my portfolio
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
        transition={{ delay: 0.65 }}
        className="mt-6 max-w-xl text-[#64748b] text-base"
      >
        Building scalable APIs and real-world web applications. Currently seeking internship opportunities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
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