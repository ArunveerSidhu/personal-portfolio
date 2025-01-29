import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <>
      <Header/>
      <div className="snap-container">
        <AboutMe/>
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App
