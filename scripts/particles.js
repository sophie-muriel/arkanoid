// particles AYAYA
class ParticleManager {
  constructor() {
    this.headerAnimation = null;
    this.footerAnimation = null;
  }

  init() {
    this.headerAnimation = document.querySelector(".header-animation");
    this.footerAnimation = document.querySelector(".footer-animation");

    if (this.headerAnimation) {
      this.createHeaderParticles();
    }

    if (this.footerAnimation) {
      this.createFooterParticles();
    }
  }

  // header particles
  createHeaderParticles() {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // random
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      // random pt. 2
      const moveX = (Math.random() - 0.5) * 200;
      const moveY = (Math.random() - 0.5) * 100;

      particle.style.top = `${top}%`;
      particle.style.left = `${left}%`;
      particle.style.setProperty("--move-x", `${moveX}px`);
      particle.style.setProperty("--move-y", `${moveY}px`);
      particle.style.animationDelay = `${Math.random() * 10}s`;

      this.headerAnimation.appendChild(particle);
    }
  }

  // footer particles
  createFooterParticles() {
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div");
      particle.className = "footer-particle";

      // random pt. 3
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      // random pt. 4
      const moveX = (Math.random() - 0.5) * 150;
      const moveY = (Math.random() - 0.5) * 80;

      particle.style.top = `${top}%`;
      particle.style.left = `${left}%`;
      particle.style.setProperty("--move-x", `${moveX}px`);
      particle.style.setProperty("--move-y", `${moveY}px`);
      particle.style.animationDelay = `${Math.random() * 15}s`;

      this.footerAnimation.appendChild(particle);
    }
  }
}

// particle manager init
document.addEventListener("DOMContentLoaded", () => {
  const particleManager = new ParticleManager();
  particleManager.init();
});
