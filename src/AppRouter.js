import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Privacy from './components/Privacy';
import Oferta from './components/Oferta';
import App from './App.tsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;