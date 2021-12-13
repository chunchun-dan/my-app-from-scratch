import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello World!';
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console';
  btn.addEventListener('click', printMe, false);

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
