# 🚀 Comment lancer votre portfolio

## ⚠️ IMPORTANT - Problème PowerShell détecté

Votre système bloque l'exécution de scripts npm via PowerShell. Voici les solutions :

### 🔧 Solution 1 : Activer l'exécution de scripts (Recommandé)

1. **Ouvrez PowerShell en tant qu'administrateur**
   - Cliquez sur le menu Démarrer
   - Tapez "PowerShell"
   - Clic droit sur "Windows PowerShell"
   - Sélectionnez "Exécuter en tant qu'administrateur"

2. **Exécutez cette commande :**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Confirmez avec 'O' (Oui)**

4. **Fermez et rouvrez PowerShell normalement**

### 🔧 Solution 2 : Utiliser l'invite de commandes (CMD)

Au lieu de PowerShell, utilisez CMD :
1. Appuyez sur `Win + R`
2. Tapez `cmd`
3. Appuyez sur Entrée
4. Naviguez vers votre dossier : `cd C:\Users\yanda\Desktop\Projet\alexisprime`

### 🔧 Solution 3 : Utiliser Git Bash (si installé)

Si vous avez Git installé, utilisez Git Bash qui n'a pas cette restriction.

---

## 📦 Étapes d'installation

Une fois le problème PowerShell résolu :

### 1. Installer les dépendances
```bash
npm install
```

Cette commande va installer :
- React 18.2.0
- Vite 5.0.0
- Tailwind CSS 3.3.5
- Framer Motion 10.16.4
- React Icons 4.11.0
- Et toutes les dépendances nécessaires

⏱️ **Temps estimé : 2-3 minutes** (selon votre connexion internet)

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Vous verrez quelque chose comme :
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 3. Ouvrir le portfolio
Ouvrez votre navigateur et allez sur : **http://localhost:5173/**

---

## 🎨 Ce qui a été créé

Votre portfolio contient :

### ✅ Sections
1. **Hero** - Page d'accueil avec présentation
2. **À propos** - Votre description personnelle
3. **Compétences** - Vos compétences techniques avec barres de progression animées
4. **Expériences** - Timeline de vos expériences professionnelles
5. **Formation** - Votre parcours académique
6. **Contact** - Formulaire de contact et informations
7. **Footer** - Liens sociaux et centres d'intérêt

### 🎯 Fonctionnalités
- ✨ Animations fluides avec Framer Motion
- 📱 Design 100% responsive (mobile, tablette, desktop)
- 🎨 Palette de couleurs rose pâle et gris foncé
- 🌊 Navigation smooth entre les sections
- 💎 Effets glassmorphism et gradients
- 🎭 Animations au scroll
- 🖱️ Effets hover interactifs

### 📂 Structure du projet
```
alexisprime/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation
│   │   ├── Hero.jsx          # Section héro
│   │   ├── About.jsx         # À propos
│   │   ├── Skills.jsx        # Compétences
│   │   ├── Experience.jsx    # Expériences
│   │   ├── Formation.jsx     # Formation
│   │   ├── Contact.jsx       # Contact
│   │   └── Footer.jsx        # Pied de page
│   ├── App.jsx               # App principale
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles globaux
├── index.html                # HTML principal
├── package.json              # Dépendances
├── vite.config.js            # Config Vite
├── tailwind.config.js        # Config Tailwind
├── postcss.config.js         # Config PostCSS
├── .gitignore                # Fichiers à ignorer par Git
├── README.md                 # Documentation principale
├── GUIDE.md                  # Guide détaillé
└── LANCEMENT.md              # Ce fichier
```

---

## 🛠️ Commandes disponibles

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Créer une version de production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## 🎨 Personnalisation rapide

### Modifier vos informations
Tous vos contenus personnels sont dans les fichiers `src/components/*.jsx`

### Changer les couleurs
Éditez `tailwind.config.js` pour modifier les couleurs rose et gris

### Ajouter une vraie photo
1. Placez votre photo dans `public/` (ex: `public/profile.jpg`)
2. Modifiez `src/components/Hero.jsx` (voir instructions dans GUIDE.md)

---

## 📤 Déploiement

Une fois satisfait de votre portfolio, vous pouvez le déployer gratuitement sur :

- **Netlify** (recommandé) - netlify.com
- **Vercel** - vercel.com
- **GitHub Pages** - pages.github.com

Consultez `GUIDE.md` pour les instructions détaillées de déploiement.

---

## ❓ Besoin d'aide ?

### Le portfolio ne se lance pas
1. Vérifiez que Node.js est installé : `node --version`
2. Vérifiez que npm est installé : `npm --version`
3. Supprimez `node_modules` et `package-lock.json`, puis réinstallez : `npm install`

### Les animations ne fonctionnent pas
Vérifiez dans la console du navigateur (F12) s'il y a des erreurs

### Les styles ne s'appliquent pas
1. Arrêtez le serveur (Ctrl+C)
2. Relancez : `npm run dev`
3. Actualisez la page (Ctrl+F5)

---

## 🎉 Félicitations !

Votre portfolio moderne et professionnel est prêt !

**Prochaines étapes :**
1. ✅ Lancez le projet avec `npm run dev`
2. 🎨 Personnalisez le contenu selon vos besoins
3. 📸 Ajoutez votre photo de profil
4. 🚀 Déployez-le en ligne

Bon développement ! 💻✨

---

**Créé avec ❤️ pour Alexis Lhussiez**

