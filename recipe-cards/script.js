const toggleButtons = document.querySelectorAll('.recipe-toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.recipe-card');
    const instructions = card.querySelector('.recipe-instructions');

    instructions.classList.toggle('show');

    button.textContent = instructions.classList.contains('show')
      ? 'Hide Instructions'
      : 'View Instructions';
  });
});
