# Hooked Tetris

Hooked Tetris is a single-page application aimed at creating an interactive and educational game by combining the classic Tetris with React hooks. The game features a main presentation screen where the player can create their avatar using the DiceBear HTTP API. Upon completing the avatar creation, the player is redirected to the game screen to play Tetris. Eliminating lines in the Tetris game reveals tips and information about various React hooks.

[`Hooked Tetris (DEMO)`](https://hooked-tetris-react-project.vercel.app/)


![Hooked Tetris](https://github.com/Lenindelrionicaragua/Hooked-Tetris_React-Project/assets/142052112/f051727e-d745-434f-a13d-eddb5ceef617)
![Hooked Tetris](https://github.com/Lenindelrionicaragua/Hooked-Tetris_React-Project/assets/142052112/f492d614-b2d2-4009-905f-090d2cd75f2a)

Hooked Tetris consists of 2 pages (routes):

- **Home Page**: Asks the user to enter a name, generate a character randomly, and displays the button to start playing.

This project was bootstrapped with Create React App.

## Demo

The online deployment of this project is available at [[Todo App](#)](https://hooked-tetris-react-project.vercel.app/).

## Getting Started

To get started, you can clonze the repository and install the dependencies in the root folder:

Dependencies:

- npm Create React App
- npm Styled-Component

Run the following commands:

```bash
npm install
npm start

This runs the app in development mode. Open http://localhost:3000 to view it in the browser.

Hooked-Tetris
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── public
│   └── assets
│       └── zen_music_tetris.mp3
└── src
    ├── components
    │   ├── AvatarCreator
    │   ├── HomeButton
    │   ├── HookInfoDisplay
    │   └── Tetris
    ├── context
    │   └── UserContext.js
    ├── data
    │   └── reactHooksMessages.js
    ├── hooks
    │   ├── useFetch.js
    │   ├── useGameStatus.js
    │   ├── useInterval.js
    │   ├── usePlayer.js
    │   └── useStage.js
    ├── pages
    │   ├── GamePage.js
    │   ├── HomePage.css
    │   └── HomePage.js
    ├── routes
    │   └── AppRoutes.js
    ├── utils
    │   └── MusicPlayer.js
    ├── App.js
    ├── gameHelpers.js
    ├── index.js
    └── tetrominos.js

Application 👍
ES6+ Features:

Arrow Functions
Template Literals
Destructuring Assignment
Block-Scoped Variables (Let and Const)
Async/Await with Try/Catch
Spread Operator
Modules Export/Import
New Built-In Methods
Default Parameters
Libraries/Frameworks:

React: UI library
Styled-components: CSS-in-JS library for styling React components
API Calls:

Generate Random Avatar:
Endpoint: https://api.dicebear.com/7.x/pixel-art/svg?seed=${randomSeed}
Method: GET
Description: Used to generate a random avatar using the DiceBear service.
Author:
Lenin Del Río
```
