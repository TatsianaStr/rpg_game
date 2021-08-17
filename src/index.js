/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { io } from 'socket.io-client';
import './index.scss';
import ClientGame from './client/ClientGame';
import { getTime } from './common/util';
// eslint-disable-next-line import/no-unresolved
window.addEventListener('load', () => {
  const socket = io('https://jsprochat.herokuapp.com');
  const startGame = document.querySelector('.start-game');
  const form = document.getElementById('nameForm');
  const name = form.querySelector('.input');
  const chat = document.querySelector('.chat-wrap');
  const formChat = document.getElementById('formChat');
  const inputChat = document.getElementById('inputChat');
  const messageSocket = document.querySelector('.message');

  const submitName = (EO) => {
    EO.preventDefault();
    if (name.value) {
      ClientGame.init({ tagId: 'game', playerName: name.value });
      socket.emit('start', name.value);
      chat.style.display = 'block';
      form.removeEventListener('submit', submitName);
      startGame.parentNode.removeChild(startGame);
    }
  };
  form.addEventListener('submit', submitName);
  formChat.addEventListener('submit', (EO) => {
    EO.preventDefault();
    if (inputChat.value) {
      console.log('#### inputChat', inputChat.value);
      socket.emit('chat message', inputChat.value);
      inputChat.value = '';
    }
  });
  socket.on('chat connection', (data) => {
    messageSocket.insertAdjacentHTML(
      'beforeend',
      `<p><strong>${getTime(data.time)}</strong> - ${data.msg}/id: ${data.id}</p>`,
    );
  });
  socket.on('chat message', (data) => {
    messageSocket.insertAdjacentHTML(
      'beforeend',
      `<p><strong>${getTime(data.time)}</strong> - ${data.name}: ${data.msg}/id: ${data.id}</p>`,
    );
    const colorMsg = document.getElementById('id');
    colorMsg.style.color = 'red';
  });
  socket.on('chat disconnect', (data) => {
    messageSocket.insertAdjacentHTML(
      'beforeend',
      `<p><strong>${getTime(data.time)}</strong> - ${data.msg}/ ${data.id}</p>`,
    );
  });
  socket.on('chat online', (data) => {
    console.log('####data', data);
    console.log('####data.names', data.names);
    let nameUsers = '';
    for (let i = 0; i < data.names.length; i++) nameUsers += `${data.names[i].name}, `;
    messageSocket.insertAdjacentHTML(
      'beforeend',
      `<p><strong>${getTime(data.time)}</strong> Online now ${data.online}: ${nameUsers}</p>`,
    );
  });
  socket.on('chat start', (data) => {
    console.log('####data', data);
    messageSocket.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });
});
