import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import WorkExperience from './pages/WorkExperience';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={ <Home /> } />
        <Route  path='/about' element={ <About /> } />
        <Route  path='/projects' element={ <Projects /> } />
        <Route  path='/workexperience' element={ <WorkExperience /> } />
        <Route  path='/resume' element={ <Resume /> } />
        <Route  path='/contact' element={ <Contact /> } />
      </Routes>
    </Router>
  )
}

export default App
