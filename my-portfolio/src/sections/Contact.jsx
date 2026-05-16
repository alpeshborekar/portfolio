import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

const links = [
  {
    label: 'Email',
    value: 'alpeshborekar33@gmail.com',
    href: 'mailto:alpeshborekar33@gmail.com',
    color: '#f59e0b',
  },
  {
    label: 'GitHub',
    value: 'github.com/alpeshborekar',
    href: 'https://github.com/alpeshborekar',
    color: '#e8e4dc',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alpesh-borekar-942622297',
    href: 'https://www.linkedin.com/in/alpesh-borekar-942622297/',
    color: '#0ea5e9',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 border-t border-[#1e1e22]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left */}
          <div className="flex-1">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#f59e0b] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-[#e8e4dc] mb-6 leading-tight"
            >
              Let's build
              <br />
              <span className="text-[#6b6b7b]">
                something real.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6b6b7b] text-base leading-relaxed max-w-md mb-10"
            >
              I'm actively looking for backend or full stack internship roles
              where I can contribute to real systems from day one.
              If your team ships products people use — I'd love to connect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-[#1e1e22] bg-[#141416] hover:border-[#2e2e36] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">

                    <span
                      className="text-xs font-semibold tracking-widest uppercase w-16"
                      style={{ color: link.color }}
                    >
                      {link.label}
                    </span>

                    <span className="text-[#6b6b7b] text-sm group-hover:text-[#e8e4dc] transition-colors">
                      {link.value}
                    </span>

                  </div>

                  <FiArrowUpRight
                    size={16}
                    className="text-[#2e2e36] group-hover:text-[#f59e0b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>
              ))}
            </motion.div>

          </div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:w-80 flex flex-col gap-4"
          >

            <div className="p-6 rounded-2xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 flex flex-col gap-4">

              <h3 className="font-display font-bold text-xl text-[#e8e4dc]">
                Open to Internships
              </h3>

              <p className="text-[#6b6b7b] text-sm leading-relaxed">
                Backend · Full Stack · API Development
                <br />
                Node.js · Flask · MongoDB · React
              </p>

              <a
                href="mailto:alpeshborekar33@gmail.com"
                className="w-full text-center px-5 py-3 rounded-xl bg-[#f59e0b] text-[#0c0c0e] font-semibold text-sm hover:bg-[#f59e0b]/90 transition-all duration-200"
              >
                Say Hello 👋
              </a>

            </div>

            <div className="p-5 rounded-xl border border-[#1e1e22] bg-[#141416]">

              <p className="text-xs text-[#6b6b7b] leading-relaxed">
                All projects are open source with documented commit history
                and READMEs on GitHub.
              </p>

              <a
                href="https://github.com/alpeshborekar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#e8e4dc] mt-3 hover:text-[#f59e0b] transition-colors"
              >
                <FiGithub size={15} />
                View GitHub Profile →
              </a>

            </div>

          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-[#1e1e22] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="font-display font-bold text-[#e8e4dc]">
            AB<span className="text-[#f59e0b]">.</span>
          </span>

          <p className="text-xs text-[#2e2e36]">
            Designed & Built by Alpesh Borekar · 2025
          </p>
        </motion.div>

      </div>
    </section>
  )
}