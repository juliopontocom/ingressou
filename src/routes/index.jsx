// src/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/index';
import Ingressou from '../pages/ingressou/index';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Ingressou />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default AppRoutes;
