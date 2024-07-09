function setupParticlesBackground() {
  tsParticles.load("tsparticles", {
      particles: {
          links: {
              enable: true,
              distance: 100,
              opacity: 0.5,
          },
          number: {
              density: {
                  enable: true,
                  value_area: 800,
              },
              value: 55,
          },
          size: {
              value: 3,
          },
          move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
          },
          opacity: {
              value: 0.5,
          },
      },
      retina_detect: true,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card').forEach(card => {
      card.innerHTML = `<div class="project-card-inner">${card.innerHTML}</div>`;
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / centerY * 15; // Adjust the multiplier for more tilt
          const rotateY = (x - centerX) / centerX * -15; // Adjust the multiplier for more tilt
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'rotateX(0) rotateY(0)';
      });
  });
});
