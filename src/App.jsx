import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'

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
      </main>
    </>
  )
}

export default App