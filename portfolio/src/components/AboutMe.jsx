import React, { useState, useEffect } from 'react'

function AboutMe() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const greetings = [
    'Hello', // English
    'Hola', // Spanish
    'Bonjour', // French
    'Ciao', // Italian
    'Hallo', // German
    'こんにちは', // Japanese
    'नमस्ते', // Hindi
    '안녕하세요', // Korean
    'Olá', // Portuguese
    'Привет', // Russian
  ];

  const currentWord = greetings[loopNum % greetings.length];

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 4000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, currentWord]);

  //min-h-[calc(100vh-4rem)]
  return (
    <section id="about" className="h-screen flex items-center py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className='w-full font-mono'>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-mono">
            <h1>
              <span className="inline-block border-r-4 border-black pr-2">
                {displayText}
              </span>
              , I am <span className='font-extrabold'>Arunveer.</span>
            </h1>
            <h1 className="mt-4">
              I am a <span className='font-extrabold'>MERN Stack Developer</span> <br className="hidden sm:block" /> with a passion for <span className='font-extrabold'>Web Development</span>.
            </h1>
            <p className='mt-8 text-base sm:text-lg lg:text-xl text-gray-500'>
              Enthusiastic Full-Stack Developer, well versed in MERN stack, and JAVA. I bring strong problem-solving skills, a knack for teamwork, and a passion for staying at the forefront of technological advancements to every project I undertake.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://www.linkedin.com/in/arunveer-sidhu-1719832b4/" target="_blank" rel="noopener noreferrer" 
                className="p-4 bg-white border-2 border-black rounded-xl hover:bg-black hover:border-white group transition-all">
                <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/ArunveerSidhu" target="_blank" rel="noopener noreferrer" 
                className="p-4 bg-white border-2 border-black rounded-xl hover:bg-black hover:border-white group transition-all">
                <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://discord.com/users/1013420712586911806" target="_blank" rel="noopener noreferrer" 
                className="p-4 bg-white border-2 border-black rounded-xl hover:bg-black hover:border-white group transition-all">
                <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                </svg>
              </a>
              <a href="https://twitter.com/Mhu666420647536" target="_blank" rel="noopener noreferrer" 
                className="p-4 bg-white border-2 border-black rounded-xl hover:bg-black hover:border-white group transition-all">
                <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
