import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './ui/pages/hero';
import Content from './ui/pages/content';
import Footer from './ui/components/footer'
import About from './ui/pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Content/>
    <About/>
    <Footer/>

    </>
  )
}

export default App
