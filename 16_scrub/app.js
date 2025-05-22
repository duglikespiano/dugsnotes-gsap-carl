gsap.to('.box', {
	scrollTrigger: {
		trigger: '.box',
		start: 'top 75%',
		end: 'bottom 25%',
		scrub: 0.2,
		markers: true,
	},
	x: 1200,
	rotation: 720,
});
