import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#e2e8f0] mb-2"
      >
        Get In <span className="text-[#6366f1]">Touch</span>
      </motion.h2>

      <div className="w-12 h-1 bg-[#22c55e] rounded mb-6 mx-auto" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[#94a3b8] mb-10"
      >
        I'm actively looking for internship opportunities. Whether you have a question,
        a project idea, or just want to connect — my inbox is always open!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-6 mb-10"
      >
        {[
          {
            icon: <FiMail size={20} />,
            label: 'Email',
            href: 'mailto:alpeshborekar33@gmail.com',
          },
          {
            icon: <FiGithub size={20} />,
            label: 'GitHub',
            href: 'https://github.com/alpeshborekar',
          },
          {
            icon: <FiLinkedin size={20} />,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/alpesh-borekar-942622297/',
          },
        ].map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-[#94a3b8] hover:text-[#6366f1] transition-colors duration-200 group"
          >
            <span className="p-3 rounded-xl border border-white/10 bg-white/5 group-hover:border-[#6366f1]/40 group-hover:bg-[#6366f1]/10 transition-all duration-200">
              {icon}
            </span>
            <span className="text-xs">{label}</span>
          </a>
        ))}
      </motion.div>

      <motion.a
        href="mailto:alpeshborekar33@gmail.com"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="inline-block px-8 py-3 rounded-lg bg-[#6366f1] text-white font-semibold hover:bg-[#4f46e5] transition-colors duration-200 shadow-lg shadow-[#6366f1]/20"
      >
        Say Hello 👋
      </motion.a>

      <p className="mt-16 text-xs text-[#334155]">
        Designed & Built by <span className="text-[#6366f1]">Alpesh Borekar</span> · 2025
      </p>
    </section>
  )
}