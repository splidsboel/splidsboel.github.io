import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Songs from './pages/Songs';





const App = () => {




  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </Router>
  )
}

export default App
