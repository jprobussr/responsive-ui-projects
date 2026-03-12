const toggleButtons = document.querySelectorAll('.recipe-toggle');

toggleButtons.forEach((button) => {
  const card = button.closest('.recipe-card');
  const instructions = card.querySelector('.recipe-instructions');

  button.addEventListener('click', () => {
    instructions.classList.toggle('show');

    button.textContent = instructions.classList.contains('show')
      ? 'Hide Instructions'
      : 'View Instructions';
  });
});
