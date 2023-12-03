// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import Projetos from './components/Projetos/Projetos';
// import Contato from './components/Contato/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
