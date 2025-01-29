import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='h-16 w-screen fixed top-0 bg-white shadow-md z-50 font-mono'>
      <nav className='h-full max-w-6xl mx-auto px-4 flex justify-between items-center text-xl'>
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex h-full text-2xl font-bold items-center justify-center gap-8'>
          <li className='cursor-pointer relative group'>
            <a href="#about">About Me</a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </li>
          <li className='cursor-pointer relative group'>
            <a href="#skills">Skills</a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </li>
          <li className='cursor-pointer relative group'>
            <a href="#projects">Projects</a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </li>
          <li className='cursor-pointer relative group'>
            <a href="#contact">Contact Me</a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </li>
        </ul>

        <a 
          href="/Resume.pdf" 
          download
          className="flex font-mono items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Resume
        </a>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40">
            <ul className='flex flex-col items-center justify-start pt-8 gap-8 text-2xl font-bold'>
              <li className='cursor-pointer'>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About Me</a>
              </li>
              <li className='cursor-pointer'>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
              </li>
              <li className='cursor-pointer'>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
              </li>
              <li className='cursor-pointer'>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header