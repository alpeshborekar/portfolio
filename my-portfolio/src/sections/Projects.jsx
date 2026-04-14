import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'SkillMatch Platform',
    badge: '⭐ Featured',
    description: 'Built a full-stack job matching platform with intelligent skill-based filtering.',
    bullets: [
      'Designed a custom scoring algorithm to match candidates with opportunities',
      'Implemented JWT authentication with three-tier RBAC (candidate / employer / admin)',
      'Prevented duplicate applications using MongoDB indexing and constraints',
      'Deployed frontend on Vercel and backend on Render',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React', 'Vercel', 'Render'],
    github: 'https://github.com/alpeshborekar/skillmatch-platform',
    demo: 'https://skillmatch-platform.vercel.app',
  },
  {
    title: 'WanderLust',
    badge: null,
    description: 'Developed a RESTful backend for a property listing and booking system.',
    bullets: [
      'Implemented ownership-based authorization for secure content control',
      'Designed structured MongoDB schemas with validation rules',
      'Built centralized error-handling middleware for consistent API responses',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/alpeshborekar/wanderlust',
    demo: null,
  },
  {
    title: 'Python Resume Analyzer',
    badge: null,
    description: 'Built an NLP-based system to analyze resumes and match them with job descriptions.',
    bullets: [
      'Extracted structured data (skills, education, experience) from raw resumes',
      'Calculated skill-match percentage using regex and text processing',
      'Designed modular architecture for easy extension to new job roles',
    ],
    tech: ['Python', 'NLP', 'Regex', 'Text Processing'],
    github: 'https://github.com/alpeshborekar/resume-analyzer',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#e2e8f0] mb-2"
      >
        My <span className="text-[#6366f1]">Projects</span>
      </motion.h2>

      <div className="w-12 h-1 bg-[#22c55e] rounded mb-10" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.15)' }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">{p.title}</h3>
              {p.badge && (
                <span className="text-xs px-2 py-1 rounded-full bg-[#22c55e]/15 text-[#22c55e] font-medium whitespace-nowrap">
                  {p.badge}
                </span>
              )}
            </div>

            <p className="text-sm text-[#94a3b8]">{p.description}</p>

            <ul className="flex flex-col gap-1.5 flex-1">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#64748b]">
                  <span className="text-[#6366f1] mt-0.5 shrink-0">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-[#6366f1]/15 text-[#818cf8] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* ✅ FIXED LINKS */}
            <div className="flex gap-4 pt-2 border-t border-white/5">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-[#94a3b8] hover:text-[#6366f1] transition-colors"
              >
                <FiGithub /> GitHub
              </a>

              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-[#94a3b8] hover:text-[#22c55e] transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-1 text-sm text-[#334155] select-none">
                  <FiExternalLink /> Backend Only
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}