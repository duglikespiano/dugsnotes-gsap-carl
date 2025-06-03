// Two ScrollTrigger can be used to have two different point to handle the animation
// This code will reset animation when the element is off the screen not like just reverse on onLeaveBack

gsap.set('.box', { opacity: 0, scale: 0.5 });

ScrollTrigger.create({
	trigger: '.container2',
	start: 'bottom 100%',
	markers: true,
	onEnter: () => gsap.to('.box', { opacity: 1, scale: 1 }),
});

ScrollTrigger.create({
	trigger: '.container2',
	start: 'top 100%',
	markers: true,
	onLeaveBack: () => {
		console.log('onLeaveBack');
		gsap.set('.box', { opacity: 0, scale: 0.5 });
	},
});
