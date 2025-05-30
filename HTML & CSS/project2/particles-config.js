particlesJS("particles-js", {
    particles: {
        number: {
            value: window.innerWidth < 768 ? 40 : 80,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: false,
            animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: window.innerWidth < 768 ? 2 : 3,
            random: true,
            animation: { enable: true, speed: 2, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: window.innerWidth < 768 ? 100 : 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: window.innerWidth < 768 ? 1 : 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: !('ontouchstart' in window), mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});
