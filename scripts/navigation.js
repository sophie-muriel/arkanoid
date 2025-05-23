// navigation woo
class NavigationManager {
  constructor() {
    this.navLinks = [];
    this.sections = [];
  }

  init() {
    this.navLinks = document.querySelectorAll('nav a[href^="#"]');
    this.sections = document.querySelectorAll("section[id]");

    this.setupSmoothScrolling();
    this.setupActiveStates();
  }

  setupSmoothScrolling() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }
}

// nav manager init
document.addEventListener("DOMContentLoaded", () => {
  const navigationManager = new NavigationManager();
  navigationManager.init();
});
