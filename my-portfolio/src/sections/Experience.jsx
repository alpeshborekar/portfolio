import { motion } from 'framer-motion'

const experiences = [
  {
    role: '100+ DSA Problems Solved',
    org: 'Self Learning · Java',
    period: '2023 – Present',
    desc: 'Solved 100+ problems covering arrays, hashing, sliding window, and string manipulation in Java.',
  },
  {
    role: 'Microsoft Azure Fundamentals',
    org: 'AZ-900 Coursework',
    period: '2024',
    desc: 'Completed Azure Fundamentals covering cloud concepts, core services, security, and pricing models.',
  },
  {
    role: 'Full Stack Developer',
    org: 'SkillMatch Platform · Self Project',
    period: '2024',
    desc: 'Built and deployed a full-stack job matching platform with JWT auth, RBAC, and a custom scoring algorithm. Live on Vercel + Render.',
  },
  {
    role: 'B.Tech – Information Technology',
    org: 'G. H. Raisoni College of Engineering & Management, Pune',
    period: '2022 – Present',
    desc: 'Studying core CS concepts, DSA, databases, and web development while building real-world projects alongside.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#e2e8f0] mb-2"
      >
        Experience & <span className="text-[#6366f1]">Achievements</span>
      </motion.h2>
      <div className="w-12 h-1 bg-[#22c55e] rounded mb-10" />

      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 items-start border border-white/10 bg-white/5 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="w-3 h-3 mt-1.5 rounded-full bg-[#6366f1] ring-4 ring-[#6366f1]/20 shrink-0" />
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h3 className="font-semibold text-[#e2e8f0]">{exp.role}</h3>
                <span className="text-xs text-[#6366f1] bg-[#6366f1]/10 px-2 py-0.5 rounded-full">
                  {exp.org}
                </span>
              </div>
              <p className="text-xs text-[#64748b] mb-2">{exp.period}</p>
              <p className="text-sm text-[#94a3b8]">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}