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