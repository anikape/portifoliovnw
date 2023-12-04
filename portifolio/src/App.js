// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './Projects/Projects';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
