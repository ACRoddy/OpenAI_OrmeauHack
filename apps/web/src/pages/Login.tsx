import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Choice Engine</h1>
        <p>One perfect pick in seconds.</p>
        <button onClick={() => navigate('/group')} style={{ padding: '8px 16px' }}>
          Continue
        </button>
      </div>
    </div>
  );
}


