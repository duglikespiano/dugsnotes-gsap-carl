// Timeline is a group of serial of tweens
// The code snippet written with timeline above has identical result with the codesnippet below

const timeline = gsap.timeline();
timeline
	.to('.box1', { x: 200, opacity: 1, duration: 0.2 })
	.to('.box2', { x: 200, opacity: 1, duration: 0.2 })
	.to('.box3', { x: 200, opacity: 1, duration: 0.2 })
	.to('.box4', { x: 200, opacity: 1, duration: 0.2 });

// gsap.to('.box1', { x: 200, opacity: 1, duration: 0.2 });
// gsap.to('.box2', { x: 200, opacity: 1, duration: 0.2, delay: 0.2 });
// gsap.to('.box3', { x: 200, opacity: 1, duration: 0.2, delay: 0.4 });
// gsap.to('.box4', { x: 200, opacity: 1, duration: 0.2, delay: 0.6 });
