import './index.scss';
import ClientGame from './client/ClientGame';
// eslint-disable-next-line import/no-unresolved
window.addEventListener('load', () => {
  const startGame = document.querySelector('.start-game');
  const form = document.getElementById('nameForm');
  const name = form.querySelector('.input');

  form.addEventListener('submit', (EO) => {
    EO.preventDefault();
    startGame.parentNode.removeChild(startGame);
    ClientGame.init({ tagId: 'game', playerName: name.value });
  });
});
