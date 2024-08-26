document.addEventListener("DOMContentLoaded", () => {
  // Toggle navbar on small screens
  const toggleButton = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector(".right");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


