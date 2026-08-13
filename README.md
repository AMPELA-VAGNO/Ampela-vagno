# Ampela Vagno — Site web de l'association

## Vue d'ensemble du projet
- **Nom** : Ampela Vagno
- **Objectif** : Présenter l'association humanitaire malgache Ampela Vagno, qui œuvre pour l'autonomisation des femmes du Grand Sud de Madagascar (district d'Ampanihy Ouest, autour d'Ejeda) et la lutte contre les mariages précoces et forcés.
- **Inspiration** : structure et esprit du site [scolarisation-madagascar.org](https://www.scolarisation-madagascar.org/) (navigation par sections, appel au don, storytelling terrain).
- **Stack** : React 19 + TypeScript + Vite + TailwindCSS + React Router, déployé en site statique sur Cloudflare Pages.

## Pages / routes disponibles
| Route | Contenu |
|---|---|
| `/` | Accueil : hero, chiffres clés, mission, AGR, zone d'intervention, témoignage fondatrice, appel au don |
| `/qui-sommes-nous` | Genèse du projet, contexte (mariages précoces), fiche d'identité de l'association, présidente, zone & bénéficiaires |
| `/nos-actions` | Objectif global (ODD1/ODD5), 5 axes d'intervention, 3 AGR (Coiffure/Cuisine/Couture), réalisations & perspectives, galerie photo |
| `/notre-impact` | Résultats attendus, impacts phase pilote, impacts visés 2027, budget estimatif |
| `/nous-soutenir` | Façons de soutenir (don, matériel, bénévolat, partenariat), budget, CTA email |
| `/contact` | Coordonnées, formulaire de contact (ouverture mailto) |

Toutes les données textuelles proviennent des documents officiels fournis par l'association : *Fiche synthétique de présentation* et *Présentation AMPELA VAGNO* (centralisées dans `src/data/content.ts`).

## Fonctionnalités déjà implémentées
- Navigation responsive avec menu déroulant (desktop) et menu mobile
- Pages entièrement rédigées à partir du contenu officiel des PDF fournis
- Photothèque intégrée (14 photos terrain fournies par l'association) dans `public/images/`
- Bannière de don réutilisable, cartes de statistiques, fiches d'impact
- Formulaire de contact (ouvre le client mail avec objet/corps pré-remplis)
- Design responsive, palette de couleurs "Madagascar" (terracotta / savane / baobab)
- SPA routing avec fallback Cloudflare Pages (`public/_redirects`)

## Fonctionnalités non implémentées / pistes d'amélioration
- Intégration d'un vrai formulaire de don en ligne (ex. HelloAsso, Stripe) — actuellement un simple `mailto:`
- Back-office ou CMS pour éditer le contenu sans toucher au code
- Blog / actualités (l'association n'a pas encore fourni ce contenu)
- Multilinguisme (FR / EN / malgache)
- Intégration de vrais réseaux sociaux (liens actuellement placeholders `#`)
- Optimisation avancée des images (formats WebP/AVIF, lazy-loading fin)

## Architecture des données
- **Contenu textuel** : `src/data/content.ts` (objets TypeScript typés, une seule source de vérité)
- **Images** : `src/data/images.ts` (mapping vers `public/images/*.jpg`)
- **Aucune base de données** : site 100% statique, pas de stockage Cloudflare (D1/KV/R2) nécessaire pour cette version

## Guide d'utilisation
1. `npm install`
2. `npm run build` — build de production dans `dist/`
3. `npm run dev:sandbox` ou PM2 (`pm2 start ecosystem.config.cjs`) pour prévisualiser en local sur le port 3000
4. `npm run deploy` — déploiement sur Cloudflare Pages (nécessite un token Cloudflare configuré)

## Déploiement
- **Plateforme** : Cloudflare Pages (site statique, `pages_build_output_dir: ./dist`)
- **Statut** : ✅ Prêt pour déploiement (build validé en local)
- **Stack** : React 19 + TypeScript + Vite 8 + TailwindCSS 3 + react-router-dom 7 + lucide-react
- **Dernière mise à jour** : 2026-08-07
# Ampela-vagno
