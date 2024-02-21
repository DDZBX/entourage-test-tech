# Test technique - Entourage - 20/02/2024

## Getting started

# Prerequis

- npm
  ```sh
  npm install npm@latest -g
  ```

# Installation

1. Cloner le repository
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Installer les packages NPM
   ```sh
   npm install
   ```
3. Lancer l'application
   ```sh
   npm run dev
   ```
4. Ouvrir un navigateur sur l'URL suivante
   ```js
   http://localhost:5173/
   ```

## Librairies utilisees

- React
- React Router
- Redux
- Redux Persist State
- Material UI + Icons
- Vite

## Suivi du temps

- Crash course sur redux: 2h
- Installation d'un environnement de dev basique et dependences / outils (nouveau PC): 2h
- Creation d'un nouveau projet a partir du [boilerplate Vite + React + Redux](https://github.com/reduxjs/redux-templates), changement de structure des fichiers et nettoyage du projet: 1h
- Decouverte de l'API TMDB et recuperation de la cle: 30min
- Decouverte de RTK Query et implementation du code suivant le [tutoriel](https://redux-toolkit.js.org/tutorials/rtk-query): 30min
- Creation de l'API tmdb et des endpoints necessaires: 1h
- Creation de la page TrendingPage et des MovieCards: 2h
- Creation de la page MoviesPage: 1h
- Creation et controle du rating et de l'ajout en favoris: 2h

## Remarques

- Persistance des donnes
- Paging et infine scrolling
- Styling
- Caching
- Typing du retour de l'API
- Tests
