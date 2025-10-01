import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyMovies } from '../../../../backend/data/dummyMovies';

export default function Swipe() {
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);
  const movie = dummyMovies[index];

  if (!movie) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
        <div style={{ textAlign: 'center' }}>
          <p>No more cards.</p>
          <button onClick={() => navigate('/consensus')} style={{ padding: '8px 16px' }}>
            See Quick Pick
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '80vh', padding: 16 }}>
      <div style={{ textAlign: 'center' }}>
        <img src={movie.posterUrl} alt={movie.title} style={{ width: 280, height: 420, objectFit: 'cover', borderRadius: 12 }} />
        <h3 style={{ marginTop: 12 }}>{movie.title}</h3>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 12 }}>
          <button onClick={() => setIndex((i) => i + 1)} style={{ padding: '8px 16px' }}>Skip</button>
          <button onClick={() => setIndex((i) => i + 1)} style={{ padding: '8px 16px' }}>Like</button>
        </div>
      </div>
    </div>
  );
}


