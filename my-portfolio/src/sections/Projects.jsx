import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'SkillMatch Platform',
    badge: '⭐ Featured',
    description:
      'Engineered a full-stack job platform where candidates and employers are matched based on skill compatibility scores. Designed a custom scoring algorithm, implemented JWT authentication with three-tier RBAC (candidate / employer / admin), and enforced database-level constraints using MongoDB indexing to prevent duplicate applications. Deployed frontend on Vercel and backend on Render.',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'React', 'Vercel', 'Render'],
    github: 'https://github.com/alpeshborekar',
    demo: 'https://skillmatch-platform.vercel.app',
  },
  {
    title: 'WanderLust',
    badge: null,
    description:
      'Architected a RESTful backend for a property listing and booking system. Implemented ownership-based authorization ensuring only listing creators can modify their content. Designed structured MongoDB schemas with validation rules and built consistent error-handling middleware across all endpoints.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/alpeshborekar',
    demo: null,
  },
  {
    title: 'Python Resume Analyzer',
    badge: null,
    description:
      'Built a modular NLP pipeline that parses resumes, extracts structured fields (skills, education, experience), and calculates a percentage match against job descriptions using text processing and regex. Designed for extensibility — new job roles can be added without changing core logic.',
    tech: ['Python', 'NLP', 'Regex', 'Text Processing'],
    github: 'https://github.com/alpeshborekar',
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
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">{p.title}</h3>
              {p.badge && (
                <span className="text-xs px-2 py-1 rounded-full bg-[#22c55e]/15 text-[#22c55e] font-medium whitespace-nowrap">
                  {p.badge}
                </span>
              )}
            </div>

            <p className="text-sm text-[#94a3b8] flex-1 leading-relaxed">
              {p.description}
            </p>

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
                  <FiExternalLink /> No Demo
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}