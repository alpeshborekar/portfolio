import { motion } from 'framer-motion'
import { FiCode, FiServer, FiZap, FiUsers } from 'react-icons/fi'

const highlights = [
  { icon: <FiServer size={16} />, label: 'Backend Systems', desc: 'REST APIs, auth, RBAC, middleware architecture' },
  { icon: <FiZap size={16} />, label: 'AI Integrations', desc: 'Gemini AI, NLP pipelines, resume parsing' },
  { icon: <FiCode size={16} />, label: 'Full Stack', desc: 'Node.js, Flask, React, MongoDB, Redis' },
  { icon: <FiUsers size={16} />, label: 'Design Lead', desc: 'GFG Chapter — branding, events, visual assets' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#f59e0b] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-[#e8e4dc] mb-8 leading-tight"
            >
              I build systems<br />
              <span className="text-[#6b6b7b]">that handle real load.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-[#6b6b7b] text-base leading-relaxed"
            >
              <p>
                I'm a backend-focused full stack developer who cares about{' '}
                <span className="text-[#e8e4dc]">clean architecture</span>,{' '}
                <span className="text-[#e8e4dc]">system design</span>, and shipping things
                that actually work in production — not just local.
              </p>
              <p>
                My work spans REST API design, JWT authentication with RBAC,
                async task processing with Celery + Redis, and AI integrations
                using the Gemini API. I'm comfortable across the full stack —
                Flask and Node.js on the backend, React on the frontend.
              </p>
              <p>
                Outside of code, I led the design team at the GeeksforGeeks
                GHRCEM Chapter — managing branding and visual assets for
                events and workshops. Solved 100+ DSA problems in Java.
                Currently pursuing B.Tech in IT with a CGPA of 8.13.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 rounded-xl border border-[#1e1e22] bg-[#141416] flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#f59e0b] font-display font-bold text-sm">
                GH
              </div>
              <div>
                <p className="text-[#e8e4dc] font-medium text-sm">B.Tech — Information Technology</p>
                <p className="text-[#6b6b7b] text-xs mt-0.5">GH Raisoni College of Engineering & Management, Pune</p>
                <p className="text-[#f59e0b] text-xs mt-1 font-medium">CGPA: 8.13 · Expected June 2027</p>
              </div>
            </motion.div>
          </div>

          {/* Right — highlight cards */}
          <div className="lg:w-80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl border border-[#1e1e22] bg-[#141416] hover:border-[#f59e0b]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#f59e0b] group-hover:scale-110 transition-transform duration-200">
                    {h.icon}
                  </span>
                  <span className="text-[#e8e4dc] font-semibold text-sm">{h.label}</span>
                </div>
                <p className="text-[#6b6b7b] text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}