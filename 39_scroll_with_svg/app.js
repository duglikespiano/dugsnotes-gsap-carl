let drop = gsap.to('#hero', { y: 7500, duration: 10, ease: 'none' });

ScrollTrigger.create({
	trigger: '#demo',
	animation: drop,
	start: 'top top',
	end: 'bottom bottom',
	scrub: true,
});

let hello = gsap.from('#hello', { x: -100, opacity: 0 });

ScrollTrigger.create({
	animation: hello,
	trigger: '#friend',
	start: 'top 50%',
	end: 'top 100',
	markers: true,
	toggleActions: 'restart reverse play reverse',
});

let foe = gsap.to('#foe', { rotation: -40, transformOrigin: '-100px 50%', repeat: 1, yoyo: true });

ScrollTrigger.create({
	trigger: '#foe',
	animation: foe,
	start: 'top 55%',
	toggleActions: 'restart none none none',
	onEnter: function () {
		gsap.to('#hero', { x: '-=100', scale: 0.8, repeat: 1, yoyo: true });
	},
});
