const numberOfBoxes = 3;

for (let i = 0; i < numberOfBoxes; i++) {
	gsap.to(`.section${i + 1} .box1`, {
		scrollTrigger: {
			trigger: `.section${i + 1} .box1`,
			start: 'top 30%',
			end: 'bottom 20%',
			scrub: 0.2,
			markers: true,
			pin: i + 1 !== 3 ? true : false,
			pinSpacing: (i + 1) % 2 === 0 ? false : true, // default is true
		},
		x: '+=100%',
	});
}
