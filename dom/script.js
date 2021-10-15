function changeMode() {
  button.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  changeText()
}

function changeText() {
  if (button.classList.contains('dark-mode')) {
    button.innerHTML = 'Light Mode'
    h1.innerHTML = 'Dark Mode ON'
  } else {
    button.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'
  }
}

const button = document.querySelector('#mode-selector');
const h1 = document.querySelector('#page-title');
const body = document.querySelector('.body');
const footer = document.querySelector('.footer');


button.addEventListener('click', changeMode);