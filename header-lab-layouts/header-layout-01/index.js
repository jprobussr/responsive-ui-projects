const header = document.getElementById('site-header');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
