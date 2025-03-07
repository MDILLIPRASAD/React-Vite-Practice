// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SankeyChart from './components/SankeyChart';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sankey" element={<SankeyChart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
