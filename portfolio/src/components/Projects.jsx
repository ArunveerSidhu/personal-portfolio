import React from 'react'

function Projects() {
  const projects = [
    {
      name: "Real Estate Native Mobile App",
      description: "Built a real estate native mobile app using React Native, Expo, and Firebase. It allows users to view properties, add properties, and manage properties.",
      githubUrl: "https://github.com/ArunveerSidhu/real-estate-native-app",
      techStack: ["React Native", "Expo", "Firebase", "Nativewind", "Expo Router", "React Navigation"],
    },

    {
        name: "Crypto Portfolio Tracker",
        description: "Built a crypto portfolio tracker using React, Node.js, and MongoDB. It allows users to track their crypto portfolio and get real-time updates on their portfolio.",
        githubUrl: "https://github.com/ArunveerSidhu/crypto-marketplace",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT", "API"],
    },
    
    {
        name: "Hotel Booking Website",
        description: "Built a hotel booking website using React, Node.js, and MongoDB. It allows users to book hotels and get real-time updates on their bookings.",
        githubUrl: "https://github.com/ArunveerSidhu/hotel-booking-website",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT", "REST API"],
    },
  ];
  
  return (
    <section id='projects' className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-8 sm:mb-16">My Projects...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border-2 border-black rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl sm:text-2xl font-mono font-bold mb-3 sm:mb-4">{project.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono bg-gray-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
