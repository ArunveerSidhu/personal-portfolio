import React from 'react'

function ContactMe() {
  const contacts = [
    {
      name: 'Email',
      value: 'sidhu.arunveer@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      href: 'mailto:arunveersidhu@gmail.com'
    },
    {
      name: 'GitHub',
      value: 'github.com/ArunveerSidhu',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com/ArunveerSidhu'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/arunveer-sidhu',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/in/arunveer-sidhu-1719832b4/'
    },
  ]

  return (
    <section id='contact' className="min-h-screen py-24 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-8 sm:mb-16">Get In Touch...</h2>
        
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 border-2 border-black rounded-xl hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <div className="group-hover:text-black transition-colors">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-mono font-bold">{contact.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <a 
            href="mailto:arunveersidhu@gmail.com"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            Send me a message
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactMe