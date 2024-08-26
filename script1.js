document.addEventListener("DOMContentLoaded", () => {
  // Ensure that the toggle button and nav links exist
  const toggleButton = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector(".right");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Toggle button or nav links are missing.");
  }
});
