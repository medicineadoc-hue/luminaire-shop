# Luxalight - Site E-commerce d'Éclairage

Site web professionnel pour la vente de luminaires et accessoires d'éclairage.

## 🚀 Technologies utilisées

- **React 19** - Framework JavaScript
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Vite** - Outil de build
- **React Router** - Navigation

## 📦 Installation

### Prérequis
- Node.js (version 18 ou plus récente)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone [URL_DU_REPOSITORY]
cd luxalight-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── base/           # Composants de base (Button, etc.)
│   └── feature/        # Composants fonctionnels (Header, Footer, etc.)
├── pages/              # Pages du site
│   ├── home/           # Page d'accueil
│   ├── categories/     # Pages de catégories de produits
│   └── ...
├── mocks/              # Données de test
├── router/             # Configuration des routes
└── i18n/               # Internationalisation
```

## 🛠️ Modification du contenu

### Modifier les produits
Les produits sont définis dans `src/mocks/products.ts`. Vous pouvez :
- Ajouter de nouveaux produits
- Modifier les prix
- Changer les images
- Mettre à jour les descriptions

### Modifier les pages
Chaque page se trouve dans `src/pages/`. Par exemple :
- Page d'accueil : `src/pages/home/page.tsx`
- Catégories : `src/pages/categories/[nom-categorie]/page.tsx`

### Modifier le design
- Styles globaux : `src/index.css`
- Configuration Tailwind : `tailwind.config.ts`
- Composants individuels : chaque composant a ses propres styles

### Modifier la navigation
- Configuration des routes : `src/router/config.tsx`
- Header/Menu : `src/components/feature/Header.tsx`

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.ts` :
```typescript
theme: {
  extend: {
    colors: {
      primary: '#votre-couleur',
      secondary: '#votre-couleur'
    }
  }
}
```

### Images
- Remplacez les URLs d'images dans les fichiers de composants
- Les images de produits sont dans `src/mocks/products.ts`

### Textes
- Contenu français : `src/i18n/local/fr/`
- Textes directs dans les composants

## 📱 Pages disponibles

- **Accueil** (`/`) - Page principale avec produits vedettes
- **Intérieur** (`/interieur`) - Luminaires d'intérieur
- **Extérieur** (`/exterieur`) - Éclairage extérieur
- **Catégories** (`/categories/*`) - Pages par type de produit
- **Portfolio** (`/portfolio`) - Galerie de projets
- **Magasins** (`/magasins`) - Localisation des magasins
- **Mon compte** (`/mon-compte`) - Espace client

## 🚀 Déploiement

### Netlify (Recommandé)
1. Connectez votre repository GitHub à Netlify
2. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel
1. Connectez votre repository à Vercel
2. Le déploiement se fait automatiquement

### Hébergement classique
1. Construire le projet :
```bash
npm run build
```
2. Uploader le contenu du dossier `dist/` sur votre serveur

## 🔧 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Construction pour production
- `npm run preview` - Prévisualisation de la version de production
- `npm run lint` - Vérification du code

## 📝 Notes importantes

### Ajout de nouveaux produits
Pour ajouter un produit dans `src/mocks/products.ts` :
```typescript
{
  id: 999,
  name: "Nom du produit",
  brand: "Marque",
  price: 99.99,
  originalPrice: 149.99, // optionnel
  discount: "-33%", // optionnel
  image: "URL_de_l_image",
  description: "Description du produit",
  category: "nom-de-la-categorie"
}
```

### Catégories disponibles
- `lustre`, `suspension`, `applique`, `plafonnier`
- `lampadaire`, `lampe-table`, `spot`
- `ampoules`, `accessoire-rail`, `rail`
- `applique-exterieure`, `suspension-exterieure`
- `projecteur`, `hublot`, `borne-poteau`

### Modification des filtres
Les filtres de chaque page de catégorie peuvent être personnalisés dans le fichier de la page correspondante.

## 🆘 Support

Pour toute question technique :
1. Vérifiez que Node.js est bien installé
2. Supprimez `node_modules` et relancez `npm install`
3. Vérifiez la console du navigateur pour les erreurs

## 📄 Licence

Ce projet est privé et propriétaire.