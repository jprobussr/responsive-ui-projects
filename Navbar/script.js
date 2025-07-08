const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    hamburger.innerHTML = '&times;';
  } else {
    hamburger.innerHTML = '&#9776;';
  }
});
