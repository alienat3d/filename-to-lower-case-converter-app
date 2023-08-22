'use strict';

// Notice the g flag on the RegExp, it will make the replacement globally within the string, if it's not used, only the first occurrence will be replaced, and also, that RegExp will match one or more white-space characters.

const input = document.querySelector('#input'),
  alert = document.querySelector('#alert');
let output = document.querySelector('#output');

input.addEventListener('focus', (evt) => {
  evt.target.value = '';
});

input.addEventListener('input', () => {
  location.reload();
});

// let str = input.addEventListener('input', (evt) => {
//   evt.target.input;
// })
let str = input.value;

str = str.replace(/\s+/g, '-').toLowerCase();

output.textContent = str;

// Copy output to clipboard:
output.addEventListener('click', () => {
  navigator.clipboard.writeText(str);
  
  alert.classList.add('show');

  setTimeout(() => {
    alert.classList.remove('show');
  }, 3000);
});
