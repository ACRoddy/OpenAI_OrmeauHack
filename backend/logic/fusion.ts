export type GenreVector = Record<string, number>;

export function normalizeVector(input: GenreVector): GenreVector {
  const entries = Object.entries(input);
  if (entries.length === 0) return {};
  const max = Math.max(...entries.map(([, v]) => v));
  if (max <= 0) return Object.fromEntries(entries.map(([k]) => [k, 0]));
  return Object.fromEntries(entries.map(([k, v]) => [k, Math.min(1, Math.max(0, v / max))]));
}

export function averageVectors(vectors: GenreVector[]): GenreVector {
  const sum: Record<string, number> = {};
  const counts: Record<string, number> = {};
  for (const vec of vectors) {
    for (const [genre, value] of Object.entries(vec)) {
      sum[genre] = (sum[genre] ?? 0) + value;
      counts[genre] = (counts[genre] ?? 0) + 1;
    }
  }
  const avg: GenreVector = {};
  for (const [genre, total] of Object.entries(sum)) {
    avg[genre] = total / (counts[genre] ?? 1);
  }
  return normalizeVector(avg);
}

export function scoreMovie(genres: string[], taste: GenreVector): number {
  // Simple score: average of taste scores for the movie's genres
  if (!genres || genres.length === 0) return 0;
  let total = 0;
  let seen = 0;
  for (const g of genres) {
    if (taste[g] !== undefined) {
      total += taste[g];
      seen += 1;
    }
  }
  if (seen === 0) return 0;
  return total / seen;
}

export type Movie = {
  id: number;
  title: string;
  genres: string[];
  runtime_minutes?: number | null;
  provider_stub?: string | null;
  popularity?: number | null;
};

export function rankMoviesByTaste(movies: Movie[], taste: GenreVector): Movie[] {
  return movies
    .map((m) => ({ movie: m, score: scoreMovie(m.genres, taste) }))
    .sort((a, b) => b.score - a.score)
    .map((s) => s.movie);
}


