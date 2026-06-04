# Portfolio — Full-Stack Developer

Portfolio minimaliste & moderne construit avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Structure

```
portfolio/
├── app/              → Layout + page principale
├── components/       → Composants React (Navbar, Hero, etc.)
├── lib/              → Données et thème (couleurs, polices)
└── public/           → Assets statiques (images, screenshots)
```

## Personnalisation rapide

1. **Tes infos** → `lib/data.ts` : projets, stack, bio
2. **Couleurs** → `lib/theme.ts` : palette complète
3. **Email / GitHub** → `components/Contact.tsx` et `components/About.tsx`
4. **Screenshots** → remplace les mockups dans `components/Projects.tsx`

## Déploiement sur Vercel

```bash
npx vercel
```

## Tech Stack

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS + styles inline
- **Animations** : Framer Motion
- **Polices** : Syne + Space Mono + Outfit (Google Fonts via next/font)
- **Icons** : Lucide React
