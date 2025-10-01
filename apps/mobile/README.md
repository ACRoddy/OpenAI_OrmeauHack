## Mobile App (Expo) — Setup

1) Create app
```
npx create-expo-app@latest choice-engine --template
```

2) Install deps
```
cd choice-engine
pnpm add @supabase/supabase-js react-native-deck-swiper nativewind react-native-svg
pnpm add @react-navigation/native @react-navigation/native-stack
```

3) Copy screen templates
- From repo `templates/mobile/Screens.tsx` → place into your app and wire with React Navigation.

4) Env
- Add Supabase URL and anon key in your app config or constants; copy root `env.sample.txt` to `.env.local` and load with your preferred method.

5) Run
```
pnpm expo start
```


