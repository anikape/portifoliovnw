// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './Projects/Projects';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
