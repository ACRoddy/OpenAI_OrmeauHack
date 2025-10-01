import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Group from './pages/Group';
import Swipe from './pages/Swipe';
import Consensus from './pages/Consensus';

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Login</Link>
        <Link to="/group">Group</Link>
        <Link to="/swipe">Swipe</Link>
        <Link to="/consensus">Consensus</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/group" element={<Group />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/consensus" element={<Consensus />} />
      </Routes>
    </div>
  );
}


