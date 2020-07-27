const button = document.querySelector('.menu--btn');
const menu = document.querySelector('.nav');
let menuOpen = false;
button.addEventListener('click', () => {
  if (!menuOpen) {
    button.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
  } else {
    button.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
})