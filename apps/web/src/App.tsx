import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Login from './pages/Login';
import Group from './pages/Group';
import Swipe from './pages/Swipe';
import Consensus from './pages/Consensus';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', paddingBottom: 56 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            SPARK
          </Typography>
          <IconButton size="large" edge="end" color="inherit" aria-label="account">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/group" element={<Group />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/consensus" element={<Consensus />} />
      </Routes>
      <BottomNav />
    </div>
  );
}


