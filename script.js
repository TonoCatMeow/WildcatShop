const counter = document.getElementById('counter');
const counterButton = document.getElementById('counter-button');
let count = 0;

counterButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
