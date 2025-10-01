import React from 'react';

type Props = {
  image: string;
  title: string;
  genres?: string[];
  runtime?: number;
  onLike: () => void;
  onSkip: () => void;
};

export default function SwipeCard({ image, title, genres = [], runtime, onLike, onSkip }: Props) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') onLike();
      if (e.key === 'ArrowLeft') onSkip();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onLike, onSkip]);

  return (
    <div className="w-[300px] sm:w-[340px]">
      <div className="shadow-card rounded-xl overflow-hidden bg-white">
        <img src={image} alt={title} className="w-full h-[440px] object-cover" />
        <div className="p-3">
          <div className="font-semibold text-lg">{title}</div>
          <div className="flex flex-wrap gap-1 mt-1">
            {genres.slice(0, 3).map((g) => (
              <span key={g} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{g}</span>
            ))}
            {runtime ? <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{runtime}m</span> : null}
          </div>
          <div className="flex gap-3 mt-3">
            <button className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200" onClick={onSkip}>Skip (←)</button>
            <button className="px-3 py-2 rounded-md bg-brand text-white hover:bg-brand-600" onClick={onLike}>Like (→)</button>
          </div>
        </div>
      </div>
    </div>
  );
}


