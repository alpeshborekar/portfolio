import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'B.Tech — Information Technology',
    org: 'G. H. Raisoni College of Engineering & Management, Pune',
    period: '2022 – Present',
    desc: 'Studying core CS fundamentals, data structures, algorithms, databases, and web development — while simultaneously building and deploying real-world full-stack applications.',
  },
  {
    role: 'Full Stack Developer',
    org: 'SkillMatch Platform · Self-Initiated',
    period: '2024',
    desc: 'Designed and shipped a production-grade job matching platform end-to-end. Implemented custom skill-scoring logic, three-tier RBAC, JWT auth, and deployed on Vercel + Render.',
  },
  {
    role: 'Backend Developer',
    org: 'WanderLust · Self-Initiated',
    period: '2024',
    desc: 'Built a secure RESTful backend for property listing and booking. Implemented ownership-based authorization, MongoDB schema validation, and centralized error handling.',
  },
  {
    role: '100+ DSA Problems Solved',
    org: 'Java · Arrays · Hashing · Sliding Window · Strings',
    period: '2023 – Present',
    desc: 'Consistently solving algorithmic problems to strengthen problem-solving fundamentals. Covers core patterns used in technical interviews.',
  },
  {
    role: 'Microsoft Azure Fundamentals',
    org: 'AZ-900 Coursework',
    period: '2024',
    desc: 'Completed coursework covering cloud concepts, core Azure services, security, compliance, and pricing models.',
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

      <div className="relative border-l-2 border-[#6366f1]/20 ml-3 flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#6366f1] ring-4 ring-[#6366f1]/20" />

            <div className="border border-white/10 bg-white/5 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-start flex-wrap gap-2 mb-1">
                <h3 className="font-semibold text-[#e2e8f0]">{exp.role}</h3>
                <span className="text-xs text-[#6366f1] bg-[#6366f1]/10 px-2 py-0.5 rounded-full">
                  {exp.org}
                </span>
              </div>
              <p className="text-xs text-[#64748b] mb-2">{exp.period}</p>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}