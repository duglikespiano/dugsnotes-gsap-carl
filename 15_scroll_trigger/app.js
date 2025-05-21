gsap.to('.box1', {
	scrollTrigger: {
		trigger: '.box1',
		//events: onEnter onLeave onEnterBack onLeaveBack
		//options: play, pause, resume, reset, restart, complete, reverse,none
		toggleActions: 'play none none reset',
		start: 'top 75%', //when top of element passes 75% viewport height
		end: 'bottom 25%', //when bottom of element passes 25% viewport height
		markers: true,
	},
	x: 1300,
	duration: 20,
	rotation: 720,
});

gsap.to('.box2', {
	scrollTrigger: {
		trigger: '.box2',
		toggleActions: 'restart pause reverse complete',
		start: 'top 75%',
		end: 'bottom 25%',
		markers: true,
	},
	x: 1300,
	y: 50,
	duration: 20,
	rotation: 720,
});

gsap.to('.box3', {
	scrollTrigger: {
		trigger: '.box3',
		toggleActions: 'restart pause complete reset',
		start: 'top 75%',
		end: 'bottom 25%',
		markers: true,
	},
	x: 1300,
	autoAlpha: 0.5,
	skewX: 30,
	duration: 20,
});
