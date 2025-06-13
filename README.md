# TuneScout

TuneScout ist eine kleine Musik-Entdecker-App, mit der du Top-Tracks, Top-Artists und ähnliche Künstler aus verschiedenen Genres entdecken kannst. Die Daten werden live von der Last.fm API geladen.

## Features

- Suche nach Top-Tracks und Top-Artists für ein beliebiges Genre
- Entdecke ähnliche Künstler zu einem bestimmten Artist
- Responsive Design mit moderner UI (React + Tailwind CSS)
- Sprachauswahl in der Navigation

## Installation & Start

1. **Repository klonen**
   ```sh
   git clone https://github.com/NiklasDu/TuneScout.git
   cd TuneScout/Frontend/tune-scout
   ```
2. **Abhängigkeiten installieren**
   ```sh
   npm install
   ```
3. **API-Key einrichten**
   - Lege eine `.env`-Datei im Verzeichnis `Frontend/tune-scout` an:
     ```
     VITE_LASTFM_API_KEY=dein_api_key
     ```
   - Einen API-Key bekommst du kostenlos bei [Last.fm API](https://www.last.fm/api/account/create).
4. **App starten**
   ```sh
   npm run dev
   ```
   Die App ist dann unter [http://localhost:5173](http://localhost:5173) erreichbar.

## Verwendete Technologien

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Last.fm API](https://www.last.fm/api)

## Projektstruktur

- `src/components/` – Wiederverwendbare UI-Komponenten (Navbar, ScoutIt, SimilarSounds, ...)
- `src/pages/` – Seiten für verschiedene Ansichten
- `public/` – Statische Assets (z.B. Logo)

## Lizenz

Dieses Projekt ist zu Lernzwecken entstanden. Für private Nutzung frei verwendbar.
