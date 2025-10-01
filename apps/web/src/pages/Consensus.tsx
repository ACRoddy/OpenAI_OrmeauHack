import React from 'react';
import { dummyMovies } from '../../../../backend/data/dummyMovies';
import { averageVectors, rankMoviesByTaste, GenreVector, Movie as FusionMovie } from '../../../../backend/logic/fusion';
import { quickPickStub } from '../../../../backend/ai/quickPickStub';

export default function Consensus() {
  const [result, setResult] = React.useState<{
    title: string;
    backups: string[];
    why: string;
    playUrl: string | null;
  } | null>(null);

  React.useEffect(() => {
    async function run() {
      const groupTaste: GenreVector[] = [
        { animation: 0.9, family: 0.8, musical: 0.6 },
        { animation: 0.8, family: 0.7, adventure: 0.4 },
      ];
      const fused = averageVectors(groupTaste);
      const shortlist: FusionMovie[] = dummyMovies.map((m) => ({
        id: m.id,
        title: m.title,
        genres: m.genres,
        runtime_minutes: m.runtime_minutes,
        provider_stub: m.provider_stub,
      }));
      const picked = await quickPickStub({ fusedTaste: fused, shortlist });
      setResult({
        title: picked.quickPick ? picked.quickPick.title : 'No pick yet',
        backups: picked.backups.map((b) => b.title),
        why: picked.why,
        playUrl: picked.playUrl,
      });
    }
    run();
  }, []);

  if (!result) return <div style={{ padding: 24 }}>Computing pick…</div>;

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '70vh', padding: 16 }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Your Quick Pick: {result.title} 🎉</h2>
        <p style={{ maxWidth: 520, margin: '8px auto' }}>{result.why}</p>
        {result.playUrl && (
          <p>
            <a href={result.playUrl} target="_blank" rel="noreferrer">Play</a>
          </p>
        )}
        {result.backups.length > 0 && (
          <p>Backups: {result.backups.join(', ')}</p>
        )}
      </div>
    </div>
  );
}


