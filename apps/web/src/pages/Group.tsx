import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Group() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Group Lobby</h2>
        <p>Waiting room (stub). Click start to begin swiping.</p>
        <button onClick={() => navigate('/swipe')} style={{ padding: '8px 16px' }}>
          Start Swiping
        </button>
      </div>
    </div>
  );
}


