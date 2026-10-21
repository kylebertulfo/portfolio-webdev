

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = navLinks.querySelectorAll("a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navigationLinks.forEach((link) => {
          const isCurrent =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", isCurrent);

          if (isCurrent) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  },
  {
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
