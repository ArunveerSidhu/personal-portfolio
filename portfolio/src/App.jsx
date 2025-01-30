import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'

function App() {

  return (
    <>
      <Header/>
      <div className="snap-container pt-16">
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </div>
    </>
  )
}

export default App
