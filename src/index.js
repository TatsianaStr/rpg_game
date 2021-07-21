import './index.scss';
import ClientGame from './client/ClientGame';
// eslint-disable-next-line import/no-unresolved
window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
// const spriteW = 48;
// const spriteH = 48;

// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;

// terrain.addEventListener('load', () => {
//   console.log(sprites);
//   const { map } = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       console.log(cfgCell[0]);
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     });
//   });
// });
// const shots = 3;
// let cycle = 0;
// const step = 10;
// let bottomPressed = false;
// let upPressed = false;
// let leftPressed = false;
// let rightPressed = false;
// const heroH = 48;
// const heroW = 48;
// const heroCenterX = heroW / 2;
// const heroCenterY = heroH / 2;
// let pX = canvas.offsetWidth / 2 - heroCenterX;
// let pY = canvas.offsetHeight / 2 - heroCenterY;
// let spriteP = 0;

// function keyDownHandler(e) {
//   if (e.key === 'Dowm' || e.key === 'ArrowDown') {
//     bottomPressed = true;
//   } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//     upPressed = true;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = true;
//   } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = true;
//   }
// }
// function keyUpHandler(e) {
//   if (e.key === 'Dowm' || e.key === 'ArrowDown') {
//     bottomPressed = false;
//   } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//     upPressed = false;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = false;
//   } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = false;
//   }
// }
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

// const img = document.createElement('img');
// img.src = hero;

// function walk(timestamp) {
//   console.log('#### timestamp', timestamp);
//   if (bottomPressed) {
//     pY = Math.min(pY + step, canvas.height - heroH);
//     cycle = (cycle + 1) % shots;
//     spriteP = 0;
//   } else if (upPressed) {
//     pY = Math.max(pY - step, 0);
//     cycle = (cycle + 1) % shots;
//     spriteP = 144;
//   } else if (leftPressed) {
//     pX = Math.max(pX - step, 0);
//     cycle = (cycle + 1) % shots;
//     spriteP = 48;
//   } else if (rightPressed) {
//     pX = Math.min(pX + step, canvas.width - heroH);
//     cycle = (cycle + 1) % shots;
//     spriteP = 96;
//   }
//   ctx.clearRect(0, 0, 600, 600);
//   ctx.drawImage(img, cycle * spriteW, spriteP, spriteW, spriteH, pX, pY, 48, 48);

//   window.requestAnimationFrame(walk);
// }

// img.addEventListener('load', () => {
//   window.requestAnimationFrame(walk);
// });
