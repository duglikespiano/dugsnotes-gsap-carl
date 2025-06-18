gsap.utils.toArray('.panel').forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: 'top top',
		pin: true,
		// If pinSpacing is true, the panel will wait until the user scroll as much it is designated and just move up without stacking effect
		pinSpacing: false,
		markers: { startColor: 'white', endColor: 'white' },
	});
});
