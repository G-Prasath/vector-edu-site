import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Courses from './components/courses/Courses'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='courses'>
          <Courses/>
        </div>
      </main>
    </>
  )
}

export default App