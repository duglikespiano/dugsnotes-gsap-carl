// Delay property gives delay for animation's start
gsap.to('.box1', { x: 200, y: 200, opacity: 1, duration: 2, delay: 1 });

// Repeat property gives additional running of the animation
gsap.to('.box2', { x: 200, y: 200, opacity: 1, duration: 2, repeat: 2 });

// The animation runs infinitely with repeat -1
gsap.to('.box3', { x: 200, y: 200, opacity: 1, duration: 2, repeat: -1 });

// Yoyo makes animation's direction forwards and backwards alternately
gsap.to('.box4', { x: 200, y: 200, opacity: 1, duration: 2, repeat: -1, yoyo: true });
