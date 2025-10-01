# Choice Engine – 3‑Hour Hack Sprint (MVP Scaffold)

This repo is pre‑scaffolded to let 4 devs build an end‑to‑end MVP in ~3 hours.

## 30‑Second Pitch
One perfect pick in seconds. Everyone swipes 3–5 cards, we fuse tastes, AI explains the top choice, and you tap Play.

## Demo Flow (Happy Path)
Login → Create/Join Group → Quick swipes (3–5) → Fusion → AI pick with reason → Click Play (stub link)

## Tech Stack (MVP)
- Frontend: Expo (React Native), `react-native-deck-swiper`, `nativewind` (Tailwind), Supabase JS SDK
- Backend/DB: Supabase (Auth, Postgres, Realtime)
- Data: TMDB API (titles, posters, genres, runtime)
- AI: OpenAI `gpt-4o-mini` (stub fallback included)

## Roles (Parallel Build)
- Dev 1 – UX Magic: onboarding + swipe deck; stores a “taste twin” vector
- Dev 2 – Engine Core: Supabase schema, fusion logic, shortlist from TMDB
- Dev 3 – AI Flair: Re-rank shortlist + “Why this?”; produce Quick Pick + backups
- Dev 4 – Collab Glue: Realtime group sync, lobby, consensus screen, simple chat/filter

## Directory Map
```
supabase/
  schema.sql         # tables: users, groups, group_members, movies, swipes, taste_profiles
  seed.sql           # a few seeded movies for offline/demo
backend/
  logic/fusion.ts    # taste vector merge + shortlist scoring helpers
  ai/quickPickStub.ts# AI stub: pick + backups + explanation
scripts/
  bootstrap.sh       # sanity checks and next steps
env.sample.txt       # if .env files are blocked in VCS, copy to .env.local
```

## Quickstart (10 minutes)
1) No‑DB Mode (fastest): use dummy data
- Skip Supabase entirely. The template screens read from `backend/data/dummyMovies.ts`.

2) Mobile app (already included — install and run)
```
# from repo root
cd apps/choice-engine

# install dependencies (first time only)
npm install

# run the app
npm run start
# press i (iOS) or a (Android) or scan QR with Expo Go
```

3) Fusion + AI wiring
- Import `backend/logic/fusion.ts` in the mobile app (or replicate logic in-app)
- Call `backend/ai/quickPickStub.ts` for a fast demo if OpenAI not configured

### Optional: Supabase Mode
If you want persistence and realtime:
1) Create a Supabase project and copy creds
2) Apply schema + seed via SQL editor using `supabase/schema.sql` and `supabase/seed.sql`
3) Add Supabase client to the app and replace dummy reads with queries

## Troubleshooting
- npm ENOENT package.json at repo root: run npm inside the Expo app folder (`apps/choice-engine`).
- iOS simulator not launching: open Xcode → install Command Line Tools; or use Expo Go on device.
- Android emulator not found: open Android Studio → start an AVD; then press `a` in Expo CLI.

## Data Shapes (Guidelines)
Genres vector example (normalized floats 0..1):
```
{
  action: 0.7,
  comedy: 0.4,
  animation: 0.8,
  drama: 0.2
}
```
`movies.genres` stored as string[] or JSONB in Postgres (this scaffold uses text[] for speed).

## Demo Script (outline)
- Everyone logs in, joins the same group
- Each swipes 3–5 cards
- Fusion engine computes top movie
- AI (or stub) explains: “Encanto — 90 mins, animated, high group match”
- Tap Play → opens a hardcoded deep link

## Notes
- Skip deep streaming integrations; use `provider_stub` and pre-mapped TMDB IDs
- If TMDB key is missing, use seeded movies only

10x hackathon challenge
