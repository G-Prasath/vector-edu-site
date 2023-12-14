import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Courses from './components/courses/Courses'
import Review from './components/review/Review'
import Contact from './components/contact/Contact'

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
        <div id='reviews'>
          <Review/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
      </main>
    </>
  )
}

export default App