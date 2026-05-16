import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    color: '#f59e0b',
    skills: ['JavaScript (ES6+)', 'Java', 'Python'],
  },
  {
    label: 'Backend',
    color: '#10b981',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'JWT', 'RBAC', 'bcrypt', 'Celery', 'Middleware'],
  },
  {
    label: 'Frontend',
    color: '#a78bfa',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Databases',
    color: '#f97316',
    skills: ['MongoDB', 'MySQL', 'Redis', 'Schema Design', 'Indexing', 'Caching'],
  },
  {
    label: 'AI / ML',
    color: '#06b6d4',
    skills: ['Google Gemini API', 'NLP', 'Resume Parsing', 'Pydantic v2'],
  },
  {
    label: 'Tools & Infra',
    color: '#6b6b7b',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'VS Code', 'Firebase'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 border-t border-[#1e1e22]">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#f59e0b] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Tech Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[#e8e4dc] mb-14"
        >
          Tools I work with
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className="p-5 rounded-xl border border-[#1e1e22] bg-[#141416] hover:border-[#1e1e22]/80 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + si * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#0c0c0e] border border-[#1e1e22] text-[#6b6b7b] hover:text-[#e8e4dc] hover:border-[#2e2e36] cursor-default transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}