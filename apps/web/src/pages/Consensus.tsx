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

  if (!result) return <div className="p-6">Computing pick…</div>;

  return (
    <div className="grid place-items-center min-h-[70vh] p-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Your Quick Pick: {result.title} 🎉</h2>
        <p className="max-w-[520px] mx-auto mt-2 text-gray-700">{result.why}</p>
        {result.playUrl && (
          <p className="mt-3">
            <a className="px-3 py-2 rounded-md bg-brand text-white hover:bg-brand-600" href={result.playUrl} target="_blank" rel="noreferrer">Play</a>
          </p>
        )}
        {result.backups.length > 0 && (
          <p className="mt-2 text-sm text-gray-600">Backups: {result.backups.join(', ')}</p>
        )}
      </div>
    </div>
  );
}


