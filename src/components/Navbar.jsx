'use client'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="font-poppins fixed top-0 z-50 flex w-full items-center justify-between bg-white/10 px-8 py-4 backdrop-blur-md shadow-md">
      {/* Logo */}
      <div className="flex w-1/6 items-center">
        <p className="cursor-default text-3xl font-extrabold text-white tracking-wide transition-all hover:text-gray-200">
          Avereal
        </p>
      </div>

      {/* Menu */}
      <div className="flex w-4/6 justify-center gap-8 text-lg font-semibold text-white">
        {['Home', 'About', 'Stacks'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative flex cursor-pointer items-center transition-all duration-300 hover:text-[#b3b3ff] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#b3b3ff] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex w-1/6 items-center justify-end gap-3">
        <a
          href="https://www.instagram.com/arlvalleal"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <Image
            src="/images/14.png"
            width={28}
            height={28}
            alt="instagram logo"
            className="transition-all duration-300 group-hover:brightness-110"
          />
        </a>

        <a
          href="https://www.tiktok.com/@endeavouryrs"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <Image
            src="/images/15.png"
            width={28}
            height={28}
            alt="tiktok logo"
            className="transition-all duration-300 group-hover:brightness-110"
          />
        </a>
      </div>
    </nav>
  )
}
