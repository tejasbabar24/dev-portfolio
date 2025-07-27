import { useState } from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import TechStack from './Sections/TechStack'
import Project from './Sections/Project'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'



function App() {
 

  return (
    <>
      <Hero/>
      <About/>
      <TechStack/>
      <Project/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
