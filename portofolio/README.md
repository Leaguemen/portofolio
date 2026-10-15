# Sean Nugroho’s portfolio

A bilingual English/Japanese portfolio built with Next.js App Router and React. Content is sourced from the supplied CV; the visual direction follows the supplied design reference.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

Content and translations live in `app/page.tsx`, the responsive design in `app/globals.css`, and metadata/fonts in `app/layout.tsx`. Photos are in `public/images`. The language selector persists its choice in local storage and updates the document language. Project artwork is typographic illustration, not a screenshot of the linked application.

Google fonts are downloaded and self-hosted by Next.js during the build, so the initial build needs network access. Japanese uses self-hosted Noto Sans JP with native Japanese fallbacks. Project, certificate, GitHub, and LinkedIn links come from the CV; contact uses an email link with no backend required.

The featured Finos project links to its public login page and uses a captured preview in `public/images/finos-login.png`. The supplied research paper is served at `/research/nugroho-inference-time-kokkos.pdf`, with reading and download links. A fixed contact bar keeps email, GitHub, and LinkedIn available across desktop and mobile.
