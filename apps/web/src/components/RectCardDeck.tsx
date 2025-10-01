import React from 'react';
import { dummyMovies } from '../../../../backend/data/dummyMovies';

export default function RectCardDeck() {
  const [index, setIndex] = React.useState(0);
  const [dragX, setDragX] = React.useState(0);
  const startX = React.useRef(0);
  const movie = dummyMovies[index];

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    startX.current = clientX;
    setDragX(0);
  };
  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setDragX(clientX - startX.current);
  };
  const onUp = () => {
    const threshold = 120;
    if (dragX > threshold || dragX < -threshold) {
      setIndex((i) => i + 1);
    }
    setDragX(0);
  };

  if (!movie) {
    return (
      <div className="grid place-items-center py-12 text-gray-600">No more cards 🎉</div>
    );
  }

  const opacity = Math.min(1, Math.abs(dragX) / 120);
  const like = dragX > 0;

  return (
    <div className="grid place-items-center py-8">
      <div
        className="w-[320px] bg-white rounded-xl shadow-card overflow-hidden select-none"
        onMouseDown={onDown as any}
        onMouseMove={onMove as any}
        onMouseUp={onUp}
        onMouseLeave={() => setDragX(0)}
        onTouchStart={onDown as any}
        onTouchMove={onMove as any}
        onTouchEnd={onUp}
        style={{ transform: `translateX(${dragX}px)`, transition: dragX === 0 ? 'transform 180ms ease-out' : 'none' }}
      >
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-[420px] object-cover" />
        <div className="p-3">
          <div className="font-semibold">{movie.title}</div>
          <div className="text-xs text-gray-500">{movie.genres.join(', ')}</div>
        </div>
        <div className="absolute top-4 left-4 px-2 py-1 rounded border-2 text-sm font-bold"
             style={{
               borderColor: like ? '#66bb6a' : '#ef5350',
               color: like ? '#66bb6a' : '#ef5350',
               opacity,
               transform: `rotate(${like ? 12 : -12}deg)`,
               background: 'rgba(0,0,0,0.12)'
             }}>
          {like ? 'LIKE' : 'NOPE'}
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-500">{index + 1} of {dummyMovies.length}</div>
    </div>
  );
}


