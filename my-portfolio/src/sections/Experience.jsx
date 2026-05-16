import { motion } from 'framer-motion'

const items = [
  {
    type: 'Leadership',
    role: 'Design Lead',
    org: 'GeeksforGeeks — GHRCEM Chapter',
    period: '2024 – 2025',
    color: '#f59e0b',
    points: [
      'Led the design team overseeing visual output for events, workshops, and community initiatives',
      'Designed social media creatives and promotional assets with consistent branding across all communications',
      'Managed creative direction for chapter activities and hackathon campaigns',
    ],
  },
  {
    type: 'Education',
    role: 'B.Tech — Information Technology',
    org: 'GH Raisoni College of Engineering & Management, Pune',
    period: '2022 – Expected June 2027',
    color: '#10b981',
    points: [
      'CGPA: 8.13 / 10',
      'Core subjects: Data Structures, Algorithms, DBMS, Operating Systems, Web Development',
      'Built and deployed multiple full-stack projects alongside academic curriculum',
    ],
  },
  {
    type: 'Achievement',
    role: '100+ DSA Problems',
    org: 'Java · Arrays · Hashing · Two Pointers · Sliding Window · Strings',
    period: '2023 – Present',
    color: '#a78bfa',
    points: [
      'Consistently solving algorithmic problems covering core interview patterns',
      'Focus on time/space complexity optimization and clean solutions',
    ],
  },
  {
    type: 'Certification',
    role: 'Microsoft Azure Fundamentals',
    org: 'AZ-900 — Coursework Completed',
    period: '2024',
    color: '#06b6d4',
    points: [
      'Covered cloud concepts, core Azure services, security, and pricing models',
      'Exam scheduled — building toward cloud deployment knowledge',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 border-t border-[#1e1e22]">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#f59e0b] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Experience & Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[#e8e4dc] mb-14"
        >
          What I've done
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl border border-[#1e1e22] bg-[#141416] hover:border-[#2e2e36] transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{ color: item.color, backgroundColor: `${item.color}15` }}
                >
                  {item.type}
                </span>
                <span className="text-xs text-[#6b6b7b]">{item.period}</span>
              </div>

              <div>
                <h3 className="font-semibold text-[#e8e4dc] text-base mb-1">{item.role}</h3>
                <p className="text-xs text-[#6b6b7b]">{item.org}</p>
              </div>

              <ul className="flex flex-col gap-2">
                {item.points.map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-xs text-[#6b6b7b] leading-relaxed">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}