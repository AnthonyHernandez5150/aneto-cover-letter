// Update "Last updated" timestamp
document.getElementById('last-updated').textContent =
  '🕒 Last updated: ' + new Date().toLocaleString();

// Dark mode toggle logic
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
