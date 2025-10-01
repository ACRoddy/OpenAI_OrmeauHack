export type DummyMovie = {
  id: number;
  title: string;
  posterUrl: string;
  overview: string;
  runtime_minutes?: number;
  genres: string[];
  provider_stub?: string;
};

export const dummyMovies: DummyMovie[] = [
  {
    id: 568124,
    title: "Encanto",
    posterUrl: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    overview: "A magical family in Colombia...",
    runtime_minutes: 102,
    genres: ["animation", "family", "musical"],
    provider_stub: "disney+",
  },
  {
    id: 508943,
    title: "Luca",
    posterUrl: "https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    overview: "Sea monster boys discover friendship...",
    runtime_minutes: 95,
    genres: ["animation", "family", "adventure"],
    provider_stub: "disney+",
  },
  {
    id: 508442,
    title: "Soul",
    posterUrl: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    overview: "Musician finds meaning beyond life...",
    runtime_minutes: 100,
    genres: ["animation", "family", "fantasy"],
    provider_stub: "disney+",
  },
  {
    id: 385128,
    title: "F9",
    posterUrl: "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    overview: "Dom Toretto and crew...",
    runtime_minutes: 143,
    genres: ["action", "thriller"],
    provider_stub: "netflix",
  },
];


