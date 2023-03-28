import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConnectPage from './pages/ConnectPage';
import ModelingPage from './pages/ModelingPage';
import HeadshotsPage from './pages/HeadshotsPage';
import ProductionBTSPage from './pages/ProductionBTSPage';
import ActorReelsPage from './pages/ActorReels';
import BioPage from './pages/BioPage';
import React from 'react';

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/headshots" element={<HeadshotsPage />} />
        <Route path="/reels" element={<ActorReelsPage />} />
        <Route path="/productionBTS" element={<ProductionBTSPage />} />
        <Route path="/modeling" element={<ModelingPage />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
