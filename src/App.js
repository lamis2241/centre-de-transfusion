import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Stocks from './pages/Stocks';
import Dons from './pages/Dons';
import Distribution from './pages/Distribution';
import Demandes from './components/Demandes';
import RendezVous from './components/RendezVous';

function App() {
  return (
    <BrowserRouter>
      {/* Barre de navigation latérale */}
      <Navbar />

      {/* Contenu principal décalé à droite */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/dons" element={<Dons />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/demandes" element={<Demandes />} />
          <Route path="/rendezvous" element={<RendezVous />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


