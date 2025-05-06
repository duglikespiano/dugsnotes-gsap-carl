// method 'to' can be used when user wants to designate the result of the animation
// css file defines the beginning of the animation
gsap.to('.box1', { x: 400, y: 400, opacity: 1, duration: 2 });

// method 'from' can be used when user wants to designate the beginning of the animation
// css file defines the result of the animation
gsap.from('.box2', { x: 400, y: 400, opacity: 1, duration: 2 });

// method 'from' can be used when user wants to designate the beginning of the animation
// css file defines nothing about animation
gsap.fromTo('.box3', { x: 400, y: 400, opacity: 1 }, { x: 200, y: 200, opacity: 0.3, duration: 2 });
