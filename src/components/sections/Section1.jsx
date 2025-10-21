'use client'

import { motion } from 'framer-motion'

export default function Section1() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
    > 
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0f] via-[#111122] to-[#1a1a33]" />
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-16 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0.1 + Math.random() * 0.4,
              scale: 0.5 + Math.random() * 0.8,
            }}
            animate={{
              y: ['100%', '-10%'],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-3 text-xl text-white/90"
        >
          <p>Hello, Welcome to my</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative flex"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="cursor-default text-8xl font-bold text-white relative drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          >
            <span className="relative inline-block">
              KERTAS
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0"
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                style={{ mixBlendMode: 'overlay' }}
              />
            </span>
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05, color: '#fff' }}
            className="cursor-default text-8xl font-bold text-transparent transition-all duration-500 hover:text-white"
            style={{
              WebkitTextStroke: '2px white',
              textShadow: '0 0 20px rgba(255,255,255,0.3)',
            }}
          >
            FOLIO
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-5 text-lg text-white/80 tracking-wide"
        >
          Frontend Developer • Creative Designer • Innovator
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-3 max-w-xl text-sm text-white/70 leading-relaxed"
        >
          Saya membangun website modern yang interaktif dan responsif, menggabungkan kreativitas
          dengan teknologi untuk menciptakan pengalaman digital yang berkesan dan profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {['Clean Code', 'Creative Design', 'High Performance'].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-white/80 text-sm backdrop-blur-md shadow-md hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#000',
            boxShadow: '0px 0px 15px rgba(255,255,255,0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 rounded-full border-2 border-white/80 px-8 py-3 text-white transition-all duration-300"
        >
          See My Work ↓
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-10 flex flex-col items-center text-white/60"
      >
        <p className="text-sm">Scroll Down</p>
        <div className="mt-2 h-8 w-[1.5px] bg-white/50" />
      </motion.div>
    </section>
  )
}
