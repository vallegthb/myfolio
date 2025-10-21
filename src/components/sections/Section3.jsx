'use client'
import { motion } from 'framer-motion'
import { SocialIcon } from '../ui'

export default function Section3() {
  return (
    <section
      id="stacks"
      className="relative flex min-h-[90vh] w-full justify-center items-center px-6 py-24 overflow-hidden"
    >
      {/* === Background gradasi yang menyatu dengan Section 2 === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0f] via-[#111122] to-[#1a1a33]" />

      {/* Efek cahaya lembut (menyatu dengan tone Section 2) */}
      <div className="absolute top-20 left-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-16 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl animate-pulse" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />

      {/* === Card utama === */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative flex max-w-lg flex-col gap-7 rounded-2xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      >
        {/* Efek border glow */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* === Judul === */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-extrabold text-white tracking-wide drop-shadow-md"
        >
          Tech Stack
        </motion.h2>

        {/* === Deskripsi === */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-sm text-white/80 leading-relaxed"
        >
          Teknologi yang saya gunakan dalam pengembangan proyek — mulai dari framework frontend
          hingga tools pendukung untuk membangun aplikasi web yang modern, efisien, dan elegan.
        </motion.p>

        {/* === Frameworks & Libraries === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <p className="text-center text-base font-semibold text-white/90 tracking-wide">
            Frameworks & Libraries
          </p>
          <div className="flex justify-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <SocialIcon src="/images/react.svg" alt="React" tooltip="React" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <SocialIcon src="/images/nextjs.svg" alt="Next.js" tooltip="Next.js" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <SocialIcon src="/images/tailwindcss.svg" alt="Tailwind CSS" tooltip="Tailwind CSS" />
            </motion.div>
          </div>
        </motion.div>

        {/* === Tools === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <p className="text-center text-base font-semibold text-white/90 tracking-wide">Tools</p>
          <div className="flex justify-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <SocialIcon src="/images/vscode.svg" alt="VSCode" tooltip="VSCode" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <SocialIcon src="/images/github.svg" alt="GitHub" tooltip="GitHub" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* === Efek floating icons di background === */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-24 left-[10%] opacity-20"
      >
        <img src="/images/react.svg" alt="React BG" className="h-14 w-14" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-28 right-[12%] opacity-20"
      >
        <img src="/images/nextjs.svg" alt="Next.js BG" className="h-14 w-14" />
      </motion.div>
    </section>
  )
}
