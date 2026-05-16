import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    num: '01',
    title: 'AI Resume Analyzer',
    status: '🟢 Live',
    tagline: 'Full-stack AI platform for intelligent resume scoring & feedback',
    bullets: [
      'Built Flask REST APIs with clean architecture (controllers, services, repositories)',
      'Weighted scoring engine: 0–100 score with Hire / Improve / Reject recommendations',
      'Gemini AI integration for per-JD improvement suggestions and candidate feedback',
      'Celery + Redis background workers for async resume parsing and AI evaluation',
      'Redis TTL caching to eliminate redundant AI calls; bcrypt + Pydantic v2 validation',
    ],
    tech: ['Python', 'Flask', 'React', 'MySQL', 'Redis', 'Celery', 'Gemini AI', 'JWT'],
    github: 'https://github.com/alpeshborekar',
    demo: 'https://resume-ai-ai-powered-ats-resume-ana.vercel.app/',
    accent: '#f59e0b',
  },
  {
    num: '02',
    title: 'SkillMatch Platform',
    status: '🟢 Live',
    tagline: 'Job platform with intelligent skill-based candidate matching',
    bullets: [
      'Custom skill-overlap scoring with referenced MongoDB collections',
      'JWT-based RBAC across candidate, employer, and admin roles',
      'Compound indexes prevent duplicate applications at the database level',
      'Application lifecycle (applied → shortlisted → rejected) via server-side middleware',
      'Deployed frontend on Vercel and backend on Render',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'React', 'Vercel', 'Render'],
    github: 'https://github.com/alpeshborekar/skillmatch-platform',
    demo: 'https://skillmatch-platform.vercel.app/login',
    accent: '#10b981',
  },
  {
    num: '03',
    title: 'WanderLust',
    status: '🔵 Backend',
    tagline: 'Property listing & booking system with secure access control',
    bullets: [
      'REST APIs for listing and booking with isolated RBAC for host and guest users',
      'MongoDB schemas with referential integrity across users, listings, and bookings',
      'Ownership checks on update/delete — only creating host can modify their records',
      'Consistent error handling and input validation at every route',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'RBAC'],
    github: 'https://github.com/alpeshborekar/wanderlust',
    demo: null,
    accent: '#a78bfa',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 border-t border-[#1e1e22]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#f59e0b] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[#e8e4dc] mb-14"
        >
          Things I've shipped
        </motion.h2>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1e1e22] bg-[#141416] hover:border-[#2e2e36] transition-all duration-400 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: p.accent }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                <span
                  className="font-display font-bold text-4xl sm:text-5xl leading-none opacity-20 shrink-0"
                  style={{ color: p.accent }}
                >
                  {p.num}
                </span>

                <div className="flex-1 min-w-0">

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#e8e4dc]">
                      {p.title}
                    </h3>

                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#0c0c0e] border border-[#1e1e22] text-[#6b6b7b]">
                      {p.status}
                    </span>
                  </div>

                  <p className="text-[#6b6b7b] text-sm mb-5">
                    {p.tagline}
                  </p>

                  <ul className="flex flex-col gap-2 mb-6">
                    {p.bullets.map(b => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-[#6b6b7b]"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: p.accent }}
                        />

                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#0c0c0e] border border-[#1e1e22] text-[#6b6b7b] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5">

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#6b6b7b] hover:text-[#e8e4dc] transition-colors"
                    >
                      <FiGithub size={15} />
                      GitHub
                    </a>

                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm hover:text-[#e8e4dc] transition-colors"
                        style={{ color: p.accent }}
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-[#2e2e36]">
                        <FiExternalLink size={14} />
                        Backend Only
                      </span>
                    )}

                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}