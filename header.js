const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu--btn');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
    menuBtn.classList.add('shrink');
    nav.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
    menuBtn.classList.remove('shrink');
    nav.classList.remove('shrink');
  }
})