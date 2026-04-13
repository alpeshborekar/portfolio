import { motion } from 'framer-motion'

const skills = [
  'JavaScript (ES6+)', 'Java', 'Python',
  'Node.js', 'Express.js', 'REST APIs',
  'JWT Auth', 'RBAC', 'bcrypt',
  'React', 'HTML', 'CSS',
  'MongoDB', 'MongoDB Atlas', 'Schema Design',
  'Git', 'GitHub', 'Postman',
  'Vercel', 'Render', 'VS Code',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-[#e2e8f0] mb-2"
      >
        About <span className="text-[#6366f1]">Me</span>
      </motion.h2>
      <div className="w-12 h-1 bg-[#22c55e] rounded mb-8" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mb-4"
      >
        Backend-focused Full Stack Developer with hands-on experience building scalable REST APIs
        using Node.js, Express.js, and MongoDB. Experienced in JWT authentication, role-based access
        control, and efficient database design.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-[#64748b] text-base leading-relaxed max-w-2xl mb-12"
      >
        🎓 B.Tech in Information Technology · G. H. Raisoni College of Engineering & Management, Pune
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ scale: 1.05, borderColor: '#6366f1' }}
            className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-sm text-[#cbd5e1] text-center font-medium backdrop-blur-sm cursor-default transition-colors duration-200"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}