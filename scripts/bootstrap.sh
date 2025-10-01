#!/usr/bin/env bash
set -euo pipefail

echo "== Choice Engine bootstrap =="

if [ ! -f .env.local ]; then
  echo "Create .env.local from .env.example and fill your keys."
fi

echo "Checking tooling..."
command -v psql >/dev/null 2>&1 || echo "psql not found (optional)"

if [ -n "${SUPABASE_DB_URL:-}" ]; then
  echo "Applying schema..."
  psql "$SUPABASE_DB_URL" -f supabase/schema.sql || true
  echo "Seeding movies..."
  psql "$SUPABASE_DB_URL" -f supabase/seed.sql || true
else
  echo "SUPABASE_DB_URL not set; run schema/seed in Supabase SQL editor."
fi

echo "Done. Next:"
echo "- Create Expo app and install deps (see README)."
echo "- Wire Supabase URL/Anon key in app."


