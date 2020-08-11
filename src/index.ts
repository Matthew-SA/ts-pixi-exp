import * as PIXI from 'pixi.js';
import Game from './game/game'

const root = document.getElementById('root');

if (root) {
  root.innerText = "test";
};

let app = new PIXI.Application({
  width: 800,
  height: 600,
});

document.body.appendChild(app.view);

window.addEventListener('load', () => new Game(), false);
