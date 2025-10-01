import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import MovieIcon from '@mui/icons-material/Movie';
import StarIcon from '@mui/icons-material/Star';

export default function BottomNav() {
  const { pathname } = useLocation();
  const value = ['/', '/group', '/swipe', '/consensus'].indexOf(pathname);
  return (
    <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50, background: 'white' }}>
      <BottomNavigation showLabels value={value}>
        <BottomNavigationAction label="Login" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Group" icon={<GroupIcon />} component={Link} to="/group" />
        <BottomNavigationAction label="Swipe" icon={<MovieIcon />} component={Link} to="/swipe" />
        <BottomNavigationAction label="Pick" icon={<StarIcon />} component={Link} to="/consensus" />
      </BottomNavigation>
    </div>
  );
}


