function loadHTML(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "header.html");
  loadHTML("footer", "footer.html");

  // Global nav click actions (after nav is loaded if inside header)
  document.addEventListener('click', (e) => {
    if (e.target.closest('nav a')) {
      const link = e.target.closest('a');
      const label = link.textContent.trim();
      console.log(`Clicked: ${label}`);
      // Add custom logic here (navigation, modals, tracking, etc.)
    }
  });
});