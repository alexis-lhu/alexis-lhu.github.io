# Guide d'utilisation du Portfolio

## 🚀 Démarrage rapide

### Option 1 : Utiliser le script d'installation (Windows)

Double-cliquez sur `install.bat` pour installer automatiquement les dépendances.

### Option 2 : Installation manuelle

Si vous rencontrez des problèmes avec PowerShell, voici comment activer l'exécution de scripts :

1. Ouvrez PowerShell en tant qu'administrateur
2. Exécutez cette commande :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

3. Confirmez avec 'O' (Oui)

Ensuite, installez les dépendances :

```bash
npm install
```

Et lancez le projet :

```bash
npm run dev
```

## 📝 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.js` :

- `rose-50`, `rose-100`, `rose-200` : Tons de rose pâle
- `gray-600`, `gray-700`, `gray-800` : Tons de gris foncé

### Modifier le contenu

Chaque section est un composant séparé dans le dossier `src/components/` :

- **Navbar.jsx** : Modifier les liens de navigation
- **Hero.jsx** : Modifier la présentation, nom, titre, liens sociaux
- **About.jsx** : Modifier la description personnelle
- **Skills.jsx** : Ajouter/modifier les compétences
- **Experience.jsx** : Ajouter/modifier les expériences
- **Formation.jsx** : Ajouter/modifier la formation
- **Contact.jsx** : Modifier les informations de contact
- **Footer.jsx** : Modifier les liens et centres d'intérêt

### Ajouter une photo de profil

Actuellement, le portfolio utilise vos initiales (AL). Pour ajouter une vraie photo :

1. Placez votre photo dans le dossier `public/` (ex: `public/profile.jpg`)
2. Dans `src/components/Hero.jsx`, remplacez :

```jsx
<div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
  <span className="text-6xl font-bold gradient-text">AL</span>
</div>
```

par :

```jsx
<div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
  <img
    src="/profile.jpg"
    alt="Alexis Lhussiez"
    className="w-full h-full object-cover"
  />
</div>
```

## 🎨 Fonctionnalités

### Animations Framer Motion

Les animations sont configurées dans chaque composant. Vous pouvez ajuster :

- Les délais d'animation (`delay`)
- La durée (`duration`)
- Le type d'animation (`type`, `ease`)

### Effet Glassmorphism

La classe `.glass` est définie dans `src/index.css` et crée un effet de verre dépoli.

### Navigation Smooth

Les liens de navigation utilisent des ancres (`#section`) pour une navigation fluide entre les sections.

## 📱 Responsive Design

Le portfolio est optimisé pour :

- Mobile (320px et plus)
- Tablette (768px et plus)
- Desktop (1024px et plus)

Les breakpoints Tailwind utilisés :

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

## 🔧 Problèmes courants

### Les icônes ne s'affichent pas

Vérifiez que `react-icons` est bien installé :

```bash
npm install react-icons
```

### Les animations ne fonctionnent pas

Vérifiez que `framer-motion` est bien installé :

```bash
npm install framer-motion
```

### Les styles Tailwind ne s'appliquent pas

1. Vérifiez que le serveur de développement est lancé
2. Supprimez le dossier `node_modules` et `package-lock.json`
3. Réinstallez les dépendances : `npm install`

## 📧 Configuration du formulaire de contact

Le formulaire actuel est simulé. Pour le rendre fonctionnel, vous pouvez :

### Option 1 : Utiliser FormSpree

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Dans `Contact.jsx`, modifiez le `handleSubmit` :

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/VOTRE_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    alert("Message envoyé avec succès !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  }
};
```

### Option 2 : Utiliser EmailJS

1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Installez EmailJS : `npm install @emailjs/browser`
3. Suivez la documentation EmailJS pour configurer l'envoi d'emails

## 🚀 Déploiement

### Netlify (Recommandé)

1. Créez un compte sur [netlify.com](https://www.netlify.com)
2. Connectez votre dépôt GitHub
3. Configurez :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Déployez !

### Vercel

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet
3. Vercel détectera automatiquement Vite
4. Déployez !

### GitHub Pages

1. Installez gh-pages : `npm install --save-dev gh-pages`
2. Ajoutez dans `package.json` :

```json
"homepage": "https://votre-username.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Modifiez `vite.config.js` :

```js
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // nom de votre dépôt
});
```

4. Exécutez : `npm run deploy`

## 📊 Optimisation des performances

### Images

- Utilisez des formats modernes (WebP, AVIF)
- Compressez vos images avant de les ajouter
- Utilisez des outils comme [TinyPNG](https://tinypng.com)

### Build

- Le build de production minifie automatiquement le code
- Les assets sont optimisés par Vite
- Le code est divisé automatiquement (code splitting)

## 🎓 Ressources supplémentaires

- [Documentation React](https://react.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Framer Motion](https://www.framer.com/motion)
- [Documentation Vite](https://vitejs.dev)

---

Bon développement ! 🚀
