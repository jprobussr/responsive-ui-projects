const header = document.querySelector('.site-header');
const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
});
