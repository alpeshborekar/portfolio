import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
// import cloudstashDiagram from '../assets/diagrams/cloudstash-architecture.svg'
import jobEvalDiagram from '../assets/diagrams/job-evaluation-architecture.png'

const projects = [
  {
    num: '01',
    title: 'CloudStash',
    status: 'Live',
    tagline: 'Scalable cloud file storage backend — Google Drive / Dropbox style',
    bullets: [
      'Clean 4-layer architecture with pluggable object storage drivers for AWS S3, MinIO, and local disk',
      'Native S3 multipart upload with presigned URLs — large files go directly to object storage, API server never bottlenecks',
      'Redis cache-aside metadata layer with TTL invalidation and PostgreSQL fallback for availability during cache failures',
      'BullMQ async pipelines for virus scanning and thumbnail generation with retry logic, graceful shutdown, and real-time Socket.IO progress',
      'SHA-256 streaming deduplication with cross-user blob sharing and per-user quota tracking',
      'Swagger/OpenAPI docs, Prometheus metrics, Grafana dashboards, Docker Compose, GitHub Actions CI/CD',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'AWS S3',
      'BullMQ',
      'Socket.IO',
      'Docker',
      'Prometheus',
    ],
    github: 'https://github.com/alpeshborekar',
    demo: 'https://cloudstash-4cb1.onrender.com/api-docs/',
    accent: '#f59e0b',
    isNew: true,
  },

  {
    num: '02',
    title: 'Job Evaluation Platform',
    status: 'Live',
    tagline: 'Backend platform for async resume evaluation and scoring workflows',
    bullets: [
      'Built Flask REST APIs using controllers, services, repositories, and validators to keep the codebase modular and maintainable',
      'Designed a scoring engine that compares resumes against job descriptions across skills, experience, and keywords',
      'Celery + Redis background workers process resume parsing and evaluation asynchronously',
      'Redis TTL caching skips repeated processing for the same resume-job description pair',
      'Secured APIs with bcrypt authentication and Pydantic v2 request validation',
    ],
    tech: [
      'Python',
      'Flask',
      'MySQL',
      'Redis',
      'Celery',
      'JWT',
    ],
    github: 'https://github.com/alpeshborekar',
    demo: 'https://resume-ai-ai-powered-ats-resume-ana.vercel.app/',
    accent: '#10b981',
    isNew: false,
    diagram: jobEvalDiagram,
    caption:
      'Async scoring workflow using Flask API, Redis queue, Celery workers, and MySQL persistence.',
  },

  {
    num: '03',
    title: 'SkillMatch Platform',
    status: 'Live',
    tagline: 'Job platform with intelligent skill-based candidate matching',
    bullets: [
      'Custom skill-overlap scoring with referenced MongoDB collections',
      'JWT-based RBAC across candidate, employer, and admin roles',
      'Compound indexes prevent duplicate applications at the database level',
      'Application lifecycle middleware: applied → shortlisted → rejected',
      'React frontend deployed on Vercel, Express backend on Render',
    ],
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'React',
      'Vercel',
      'Render',
    ],
    github: 'https://github.com/alpeshborekar/skillmatch-platform',
    demo: 'https://skillmatch-platform.vercel.app',
    accent: '#a78bfa',
    isNew: false,
  },

  {
    num: '04',
    title: 'WanderLust',
    status: 'Backend',
    tagline: 'Property listing and booking system with secure access control',
    bullets: [
      'REST APIs for listing and booking with isolated RBAC for host and guest users',
      'MongoDB schemas with referential integrity across users, listings, and bookings',
      'Ownership checks on update and delete — only the creating host can modify records',
      'Consistent error handling and input validation at every route',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'RBAC'],
    github: 'https://github.com/alpeshborekar/wanderlust',
    demo: null,
    accent: '#f97316',
    isNew: false,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 border-t border-[#1e1e22]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#f59e0b] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Projects
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[#e8e4dc] mb-14"
        >
          Things I Have Shipped
        </motion.h2>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1e1e22] bg-[#141416] hover:border-[#2e2e36] transition-all duration-300 overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: p.accent }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                {/* Number */}
                <span
                  className="font-display font-bold text-4xl sm:text-5xl leading-none opacity-20 shrink-0"
                  style={{ color: p.accent }}
                >
                  {p.num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">

                  {/* Title */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#e8e4dc]">
                      {p.title}
                    </h3>

                    {p.isNew && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          color: p.accent,
                          backgroundColor: `${p.accent}20`,
                        }}
                      >
                        New
                      </span>
                    )}

                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#0c0c0e] border border-[#1e1e22] text-[#6b6b7b]">
                      {p.status}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-[#6b6b7b] text-sm mb-5">
                    {p.tagline}
                  </p>

                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-[#6b6b7b]"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: p.accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#0c0c0e] border border-[#1e1e22] text-[#6b6b7b] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Architecture Diagram */}
                  {p.diagram && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#e8e4dc] mb-3">
                        System Architecture
                      </h4>

                      <div className="rounded-2xl overflow-hidden border border-[#1e1e22] bg-[#0c0c0e] p-3">
                        <img
                          src={p.diagram}
                          alt={`${p.title} Architecture Diagram`}
                          className="w-full rounded-xl object-cover"
                        />
                      </div>

                      <p className="text-xs text-[#6b6b7b] mt-3">
                        {p.caption}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-5">

                    {/* GitHub */}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#6b6b7b] hover:text-[#e8e4dc] transition-colors"
                    >
                      <FiGithub size={15} />
                      GitHub
                    </a>

                    {/* Demo */}
                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors hover:opacity-80"
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