import React from 'react'

function Header() {
  return (
    <header className='h-16 w-screen  fixed top-0 bg-white z-50 font-mono'>
      <nav className='h-full max-w-6xl mt-2 mx-auto px-4 flex justify-between items-center text-xl'>
        <ul className='h-full text-2xl font-bold flex items-center justify-center gap-8 '>
          <li className='cursor-pointer hover:text-gray-700 transition-colors'>
            <a href="#about">About Me</a>
          </li>
          <li className='cursor-pointer hover:text-gray-700 transition-colors'>
            <a href="#skills">Skills</a>
          </li>
          <li className='cursor-pointer hover:text-gray-700 transition-colors'>
            <a href="#projects">Projects</a>
          </li>
          <li className='cursor-pointer hover:text-gray-700 transition-colors'>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <button className="flex font-mono items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Resume
        </button>
      </nav>
    </header>
  )
}

export default Header