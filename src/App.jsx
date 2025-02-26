import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './ui/pages/hero';
import Content from './ui/pages/content';
import Footer from './ui/components/footer'
import College from './ui/pages/college'
import About from './ui/pages/about'
import Register from './ui/auth/register';
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
 <Routes>
       <Route path="/" element={
         <>
           <Hero />
           <Content/>
           <College/>
           <About/>
           <Footer/>
         </>
       } />
       <Route path="/register" element={<Register />} />
 
     </Routes>
 
    </>
   );
}

export default App
