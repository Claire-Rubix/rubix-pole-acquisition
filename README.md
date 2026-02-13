# Pôle Acquisition - Rubix

Application de suivi quotidien du pôle acquisition. Remplace le fichier Excel.

## Prérequis

- **Node.js** 18+ → [nodejs.org](https://nodejs.org)
- **VS Code** → [code.visualstudio.com](https://code.visualstudio.com)
- **Git** → [git-scm.com](https://git-scm.com)
- **Compte GitHub** → [github.com](https://github.com)
- **Compte Vercel** → [vercel.com](https://vercel.com) (connexion avec GitHub)

---

## Étape 1 · Installer Claude Code dans VS Code

1. Ouvrir VS Code
2. Aller dans Extensions (Ctrl+Shift+X)
3. Chercher **"Claude Code"** et installer
4. Ouvrir le terminal VS Code (Ctrl+`) 
5. Taper `claude` pour lancer Claude Code
6. Suivre les instructions d'authentification

---

## Étape 2 · Créer le repo GitHub

1. Aller sur [github.com/new](https://github.com/new)
2. Nom : `rubix-pole-acquisition`
3. Cocher **Private**
4. Cliquer **Create repository**
5. Copier l'URL du repo (ex: `https://github.com/ton-user/rubix-pole-acquisition.git`)

---

## Étape 3 · Cloner et initialiser le projet

Dans le terminal VS Code :

```bash
# Cloner le repo vide
git clone https://github.com/ton-user/rubix-pole-acquisition.git
cd rubix-pole-acquisition

# Copier les fichiers du projet (package.json, src/App.jsx, etc.)
# OU demander à Claude Code de le faire

# Installer les dépendances
npm install

# Lancer en local
npm run dev
```

L'app tourne sur `http://localhost:5173`

---

## Étape 4 · Premier commit

```bash
git add .
git commit -m "v1 - Pôle Acquisition Rubix"
git push origin main
```

---

## Étape 5 · Déployer sur Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Cliquer **Import** à côté de `rubix-pole-acquisition`
3. Framework : **Vite** (auto-détecté)
4. Cliquer **Deploy**
5. En 30 secondes l'app est en ligne avec une URL `https://rubix-pole-acquisition.vercel.app`

Chaque `git push` redéploie automatiquement.

---

## Travailler avec Claude Code

Dans le terminal VS Code, tape `claude` puis demande ce que tu veux :

```
claude > "Ajoute un champ numéro de ticket dans le formulaire reporting"
claude > "Change la couleur du header en rouge"  
claude > "Ajoute un graphique camembert dans l'onglet Mois"
```

Claude Code modifie directement les fichiers. Tu vérifies en local (`npm run dev`), puis tu push :

```bash
git add .
git commit -m "ajout champ ticket"
git push
```

Vercel redéploie automatiquement.

---

## Structure du projet

```
rubix-pole-acquisition/
├── index.html          ← Page HTML (animations CSS)
├── package.json        ← Dépendances (React, Vite)
├── vite.config.js      ← Config build
├── .gitignore
├── README.md
└── src/
    ├── main.jsx        ← Point d'entrée React
    └── App.jsx         ← Toute l'application (composant unique)
```

## Stockage

Les données sont sauvegardées dans le **localStorage** du navigateur.
Chaque navigateur/appareil a ses propres données.

Pour une vraie base de données partagée (ex: Denis voit les données de David), il faudra ajouter un backend (Supabase, Firebase, etc.).
