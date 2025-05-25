const numberOfToTopButton = 4;

for (let i = 0; i < numberOfToTopButton; i++) {
	ScrollTrigger.create({
		trigger: `.container${i + 1}`,
		start: '75% bottom',
		animation: gsap
			.timeline()
			.to(`.to-top${i + 1}`, {
				bottom: '10vh',
				duration: 1,
			})
			.to(`.to-top${i + 1}`, {
				rotation: 720,
				bottom: '7.5vh',
				duration: 1,
			})
			.to(`.to-top${i + 1}`, {
				autoAlpha: 0.5,
				duration: 1,
			})
			.to(`.to-top${i + 1}`, {
				bottom: '3vh',
				autoAlpha: 1,
				duration: 1,
			}),
		toggleActions: 'play none none reverse',
		markers: true,
		// If the user moves its viewport in very short time, animations that were linked with elements between the points fires too
		// To prevent those situation, preventOverlaps method can be used,
		// It resets aniamtions between points and plays the only animation which places at the last of the user's viewport
		preventOverlaps: true,
	});
}
