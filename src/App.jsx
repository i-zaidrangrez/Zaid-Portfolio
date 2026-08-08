import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Project/Projects'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App