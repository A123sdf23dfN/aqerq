document.addEventListener("DOMContentLoaded", () => {
  // Toggle navbar on small screens
  const toggleButton = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector(".right");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });

      // Close the menu on small screens after a link is clicked
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
});

// JavaScript for Scroll-Based Animations

// Function to handle element visibility
window.onload = function () {
  const skillsScroll = document.querySelector(".skills-scroll");

  // Ensure the scroll position starts at 0
  skillsScroll.scrollLeft = 0;

  // Set an interval to scroll smoothly to the right
  setInterval(() => {
    skillsScroll.scrollBy({ left: 1, behavior: "smooth" });

    // Reset scroll position if at the end
    if (
      skillsScroll.scrollLeft >=
      skillsScroll.scrollWidth - skillsScroll.clientWidth
    ) {
      skillsScroll.scrollLeft = 0;
    }
  }, 20); // Adjust the speed as needed
};
