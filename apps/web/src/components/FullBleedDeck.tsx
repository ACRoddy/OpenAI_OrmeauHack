import React, { useEffect, useMemo, useRef, useState } from 'react';

type Movie = { id: number; name: string; url: string };

const moviesSeed: Movie[] = [
  { id: 1,  name: 'Inception', url: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
  { id: 2,  name: 'Interstellar', url: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { id: 3,  name: 'The Dark Knight', url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { id: 4,  name: 'The Matrix', url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
  { id: 5,  name: 'Dune: Part One', url: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
  { id: 6,  name: 'Dune: Part Two', url: 'https://image.tmdb.org/t/p/w500/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg' },
  { id: 7,  name: 'Oppenheimer', url: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckB8Z8KBgeeiJX0p2t1.jpg' },
  { id: 8,  name: 'Barbie', url: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
  { id: 9,  name: 'Mad Max: Fury Road', url: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg' },
  { id: 10, name: 'Gladiator', url: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
  { id: 11, name: 'Gladiator II', url: 'https://image.tmdb.org/t/p/w500/5qGIxdEO841C0tdY8vOdLoRVLBV.jpg' },
  { id: 12, name: 'The Social Network', url: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
  { id: 13, name: 'The Martian', url: 'https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg' },
  { id: 14, name: 'Whiplash', url: 'https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg' },
  { id: 15, name: 'La La Land', url: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg' },
  { id: 16, name: 'Arrival', url: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg' },
  { id: 17, name: 'Blade Runner 2049', url: 'https://image.tmdb.org/t/p/w500/aMpyrCizvS5t0imSD5eC6u9hA3n.jpg' },
  { id: 18, name: 'Spider-Verse', url: 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg' },
  { id: 19, name: 'Everything Everywhere All at Once', url: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg' },
  { id: 20, name: 'Parasite', url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
  { id: 21, name: 'Joker', url: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
  { id: 22, name: 'Tenet', url: 'https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg' },
  { id: 23, name: 'The Batman', url: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
  { id: 24, name: 'No Time To Die', url: 'https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg' },
  { id: 25, name: 'Top Gun: Maverick', url: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg' },
  { id: 26, name: 'John Wick', url: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg' },
  { id: 27, name: 'The Grand Budapest Hotel', url: 'https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg' },
  { id: 28, name: 'Her', url: 'https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg' },
  { id: 29, name: 'Ex Machina', url: 'https://image.tmdb.org/t/p/w500/9bVWmK9vE9j1FMzdON3lM5rB2Vv.jpg' },
  { id: 30, name: 'The Prestige', url: 'https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg' },
  { id: 31, name: 'Logan', url: 'https://image.tmdb.org/t/p/w500/45Y1G5FEgttPAwjTYic6czC9xCn.jpg' },
  { id: 32, name: 'Guardians of the Galaxy', url: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg' },
  { id: 33, name: 'The Lord of the Rings: Fellowship', url: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
  { id: 34, name: 'The Lord of the Rings: Two Towers', url: 'https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg' },
  { id: 35, name: 'The Lord of the Rings: Return of the King', url: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
];

const T = {
  bg: '#0f1115',
  on: 'rgba(255,255,255,0.95)',
  muted: 'rgba(255,255,255,0.65)',
  surface: '#141923',
  outline: 'rgba(255,255,255,0.12)',
  primary: '#3f51b5',
  success: '#66bb6a',
  error: '#ef5350',
};

export default function FullBleedDeck() {
  const [tab, setTab] = useState<'movies' | 'tv' | 'games' | 'food'>('movies');
  const [deck, setDeck] = useState<Movie[]>(moviesSeed);
  const [drag, setDrag] = useState({ x: 0, y: 0, r: 0, active: false });
  const start = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const setH = () => document.documentElement.style.setProperty('--app-h', window.innerHeight + 'px');
    setH();
    window.addEventListener('resize', setH);
    window.addEventListener('orientationchange', setH);
    return () => {
      window.removeEventListener('resize', setH);
      window.removeEventListener('orientationchange', setH);
    };
  }, []);

  const title = useMemo(() => {
    const map: Record<string, string> = { movies: 'Movies', tv: 'TV', games: 'Games', food: 'Food' };
    return map[tab];
  }, [tab]);

  const onPointerDown = (e: any) => {
    start.current = { x: e.clientX ?? e.touches?.[0]?.clientX, y: e.clientY ?? e.touches?.[0]?.clientY };
    setDrag((d) => ({ ...d, active: true }));
  };
  const onPointerMove = (e: any) => {
    if (!drag.active) return;
    const cx = e.clientX ?? e.touches?.[0]?.clientX ?? start.current.x;
    const cy = e.clientY ?? e.touches?.[0]?.clientY ?? start.current.y;
    const dx = cx - start.current.x;
    const dy = cy - start.current.y;
    setDrag({ x: dx, y: dy, r: dx / 14, active: true });
  };
  const onPointerUp = () => {
    const threshold = 120;
    const swiped = drag.x > threshold ? 'right' : drag.x < -threshold ? 'left' : null;
    if (swiped) {
      setDeck((d) => d.slice(1));
    }
    setDrag({ x: 0, y: 0, r: 0, active: false });
  };

  const top = deck[0];

  const switchTab = (key: 'movies' | 'tv' | 'games' | 'food', label: string) => {
    setTab(key);
    if (key === 'movies') {
      setDeck(moviesSeed);
    } else {
      setDeck([
        { id: 1000 + Math.random(), name: `${label} coming soon`, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop' },
      ]);
    }
  };

  return (
    <div style={styles.root as React.CSSProperties}>
      <div style={styles.deckArea as React.CSSProperties}>
        <div style={styles.topOverlay as React.CSSProperties}>
          <div style={styles.brand as React.CSSProperties}>
            <span style={styles.brandDot as React.CSSProperties}></span>
            <span style={styles.brandText as React.CSSProperties}>SPARK</span>
          </div>
          <div style={styles.headerRight as React.CSSProperties}>{title}</div>
        </div>

        <div style={styles.deck as React.CSSProperties}>
          {deck.slice(0, 3).map((m, i) => {
            const isTop = i === 0;
            const z = 100 - i;
            const transform = isTop
              ? `translate(${drag.x}px, ${drag.y}px) rotate(${drag.r}deg)`
              : `translate(0, ${i * 8}px) scale(${1 - i * 0.02})`;
            return (
              <div
                key={m.id}
                style={{
                  ...styles.card,
                  backgroundImage: `url(${m.url})`,
                  transform,
                  zIndex: z,
                } as React.CSSProperties}
                onMouseDown={isTop ? onPointerDown : undefined}
                onMouseMove={isTop ? onPointerMove : undefined}
                onMouseUp={isTop ? onPointerUp : undefined}
                onTouchStart={isTop ? onPointerDown : undefined}
                onTouchMove={isTop ? onPointerMove : undefined}
                onTouchEnd={isTop ? onPointerUp : undefined}
              >
                <div style={styles.scrim as React.CSSProperties} />
                <div style={styles.cardFooter as React.CSSProperties}>
                  <div style={styles.title as React.CSSProperties}>{m.name}</div>
                </div>
                {isTop && (
                  <>
                    <div
                      style={{
                        ...styles.badge,
                        left: 12,
                        borderColor: T.error,
                        color: T.error,
                        opacity: Math.max(0, Math.min(1, -drag.x / 120)),
                        transform: `rotate(-12deg)`,
                      } as React.CSSProperties}
                    >
                      NOPE
                    </div>
                    <div
                      style={{
                        ...styles.badge,
                        right: 12,
                        borderColor: T.success,
                        color: T.success,
                        opacity: Math.max(0, Math.min(1, drag.x / 120)),
                        transform: `rotate(12deg)`,
                      } as React.CSSProperties}
                    >
                      LIKE
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {!top && <div style={styles.endText as React.CSSProperties}>No more cards 🎉</div>}

          <div style={styles.floatActions as React.CSSProperties}>
            <button
              aria-label="Likes"
              onClick={() => alert('Likes placeholder')}
              style={{ ...styles.fab, background: T.surface, border: `1px solid ${T.outline}` } as React.CSSProperties}
              title="Likes"
            >
              <i className="bi bi-heart-fill" />
            </button>
            <button
              aria-label="Comments"
              onClick={() => alert('Comments placeholder')}
              style={{ ...styles.fab, background: T.surface, border: `1px solid ${T.outline}` } as React.CSSProperties}
              title="Comments"
            >
              <i className="bi bi-chat-left-dots-fill" />
            </button>
          </div>
        </div>
      </div>

      <div style={styles.navbar as React.CSSProperties}>
        {[
          { key: 'movies', label: 'Movies', icon: 'bi-film' },
          { key: 'tv', label: 'TV', icon: 'bi-tv' },
          { key: 'games', label: 'Games', icon: 'bi-controller' },
          { key: 'food', label: 'Food', icon: 'bi-cup-straw' },
        ].map((item) => {
          const active = tab === (item.key as typeof tab);
          return (
            <button
              key={item.key}
              onClick={() => switchTab(item.key as any, item.label)}
              style={{
                ...styles.navItem,
                color: active ? T.primary : T.muted,
                borderTop: active ? `2px solid ${T.primary}` : '2px solid transparent',
              } as React.CSSProperties}
            >
              <i className={`bi ${item.icon}`} style={{ fontSize: 20, lineHeight: '20px' }} />
              <div style={{ fontSize: 12 }}>{item.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    height: 'var(--app-h, 100vh)',
    width: '100vw',
    background: T.bg,
    color: T.on,
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows: '1fr 64px',
  },
  deckArea: { position: 'relative', height: '100%', width: '100%' },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    zIndex: 200,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))',
  },
  brand: { display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, letterSpacing: 1.5 },
  brandDot: { width: 10, height: 10, borderRadius: 999, background: '#ff4081', display: 'inline-block' },
  brandText: { fontSize: 16 },
  headerRight: { fontSize: 13, color: T.muted },
  deck: { height: '100%', width: '100%', position: 'relative' },
  card: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 0,
    userSelect: 'none',
    touchAction: 'none',
    willChange: 'transform',
    boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
  },
  scrim: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.05) 100%)',
  },
  cardFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 16,
  },
  title: {
    fontWeight: 900,
    fontSize: 22,
    padding: '8px 12px',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    backdropFilter: 'blur(2px)',
  },
  badge: {
    position: 'absolute',
    top: 16,
    padding: '6px 10px',
    borderRadius: 8,
    borderWidth: 3,
    borderStyle: 'solid',
    fontWeight: 900,
    letterSpacing: 2,
    background: 'rgba(0,0,0,0.12)',
  },
  endText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: T.muted,
    fontSize: 16,
    zIndex: 300,
  },
  floatActions: {
    position: 'absolute',
    bottom: 88,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    zIndex: 250,
    pointerEvents: 'none',
  },
  fab: {
    pointerEvents: 'auto',
    width: 56,
    height: 56,
    borderRadius: 999,
    border: 'none',
    boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
    display: 'grid',
    placeItems: 'center',
    fontSize: 22,
    color: T.on,
    cursor: 'pointer',
  },
  navbar: {
    height: 64,
    display: 'flex',
    background: T.surface,
    borderTop: `1px solid ${T.outline}`,
  },
  navItem: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: 700,
  },
};


