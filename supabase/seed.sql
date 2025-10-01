-- Minimal seed with a few family‑friendly/popular titles
insert into public.movies (id, title, poster_path, overview, runtime_minutes, genres, provider_stub, popularity)
values
  (385128, 'F9', '/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg', 'Dom Toretto and crew...', 143, '{action, thriller}', 'netflix', 120.0)
on conflict (id) do nothing;

insert into public.movies (id, title, poster_path, overview, runtime_minutes, genres, provider_stub, popularity)
values
  (568124, 'Encanto', '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg', 'A magical family in Colombia...', 102, '{animation, family, musical}', 'disney+', 300.0)
on conflict (id) do nothing;

insert into public.movies (id, title, poster_path, overview, runtime_minutes, genres, provider_stub, popularity)
values
  (508943, 'Luca', '/jTswp6KyDYKtvC52GbHagrZbGvD.jpg', 'Sea monster boys discover friendship...', 95, '{animation, family, adventure}', 'disney+', 250.0)
on conflict (id) do nothing;

insert into public.movies (id, title, poster_path, overview, runtime_minutes, genres, provider_stub, popularity)
values
  (508442, 'Soul', '/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg', 'Musician finds meaning beyond life...', 100, '{animation, family, fantasy}', 'disney+', 260.0)
on conflict (id) do nothing;


