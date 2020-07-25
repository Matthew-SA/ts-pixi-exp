import * as PIXI from "pixi.js";

const root = document.getElementById("root");

if (root) {
  root.innerText = "test";
};

let app = new PIXI.Application({ width: 256, height: 256 });
document.body.appendChild(app.view);
