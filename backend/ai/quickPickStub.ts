import { Movie, GenreVector, rankMoviesByTaste } from "../logic/fusion";

export type QuickPickResult = {
  quickPick: Movie | null;
  backups: Movie[];
  why: string;
  playUrl: string | null;
};

type AIInput = {
  fusedTaste: GenreVector;
  shortlist: Movie[];
  context?: { mood?: string; maxRuntime?: number };
};

export async function quickPickStub(input: AIInput): Promise<QuickPickResult> {
  const ranked = rankMoviesByTaste(input.shortlist, input.fusedTaste);
  const quickPick = ranked[0] ?? null;
  const backups = ranked.slice(1, 4);

  const why = quickPick
    ? `Quick Pick: ${quickPick.title} — matches group taste across ${
        quickPick.genres.join(", ")
      }` +
      (input.context?.maxRuntime
        ? `, under ${input.context.maxRuntime} mins`
        : "") +
      (quickPick.provider_stub ? `, available on ${quickPick.provider_stub}` : "")
    : "Not enough data to pick yet — keep swiping!";

  const playUrl = quickPick ? `https://www.themoviedb.org/movie/${quickPick.id}` : null;

  return { quickPick, backups, why, playUrl };
}


