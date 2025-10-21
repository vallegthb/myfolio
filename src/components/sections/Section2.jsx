'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Section2() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100vh] flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* === Background gradasi menyatu dengan Section 1 === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a1a33] via-[#131326] to-[#0a0a0f]" />

      {/* Cahaya lembut agar konsisten dengan Section 1 */}
      <div className="absolute top-10 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl animate-pulse" />

      {/* Pola radial halus */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />

      {/* === Judul Section === */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col items-center gap-2"
      >
        <p className="text-center text-xl font-semibold text-white">About Me</p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-16 border-b-2 border-white" />
          <div className="h-3 w-3 rotate-45 bg-white" />
          <div className="h-1 w-16 border-b-2 border-white" />
        </div>
      </motion.div>

      {/* === Konten Utama === */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 z-10">
        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-lg text-center lg:text-left"
        >
          <p className="text-xl font-semibold text-white mb-2">
            I'm a Developer
          </p>
          <p className="mb-4 text-3xl font-bold text-white leading-tight">
            I build modern, responsive & interactive web experiences.
          </p>
          <p className="italic text-white/80 leading-relaxed">
            Halo, aku <span className="font-semibold text-white">Widodok</span> — seorang developer
            yang berfokus pada pembuatan aplikasi web dengan performa tinggi dan tampilan elegan.
            Aku menikmati proses membangun desain yang intuitif dan berjiwa interaktif dengan
            teknologi seperti <span className="text-white">Next.js</span>,{' '}
            <span className="text-white">React</span>, dan{' '}
            <span className="text-white">TailwindCSS</span>.
          </p>

          {/* CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-block rounded-full border-2 border-white/80 px-6 py-2 text-white transition-all hover:bg-white hover:text-black"
          >
            View Projects →
          </motion.a>
        </motion.div>

        {/* Foto Profil */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="group relative rounded-2xl bg-white/10 backdrop-blur-md p-2 shadow-xl transition-all duration-300 hover:shadow-white/20">
            <Image
              src="/images/16.png"
              alt="Profile"
              width={260}
              height={260}
              className="rounded-2xl object-cover"
            />
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>

      {/* === Highlight Skill Cards === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5 z-10"
      >
        {[
          { name: 'Frontend', desc: 'React, Next.js, TailwindCSS' },
          { name: 'Backend', desc: 'Node.js, Express, MySQL' },
          { name: 'Design', desc: 'Figma, UI/UX, Motion UI' },
          { name: 'Tools', desc: 'Git, VSCode, Postman' },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/10 backdrop-blur-md p-5 text-center shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            <p className="text-lg font-semibold text-white">{item.name}</p>
            <p className="text-sm text-white/80">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
