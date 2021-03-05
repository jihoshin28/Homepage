import React from 'react'
import './App.css';

//Navbar import
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Section imports
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Resume from './components/sections/Resume'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main id="main">
        <Hero/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
