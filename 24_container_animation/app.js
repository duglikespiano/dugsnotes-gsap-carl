const horizontalContainers = gsap.utils.toArray('.horizontal-container.container');
const numberOfBox = 3;

const horizontalScrollContainerAnimation = gsap.to(horizontalContainers, {
	xPercent: -100 * (horizontalContainers.length - 1),
	// ease: 'none' is recommended
	ease: 'none',
	scrollTrigger: {
		trigger: `.horizontal-containers`,
		// To make horizontal scroll area, container must be pinned
		pin: true,
		scrub: true,
		markers: true,
		end: `+=${document.querySelector('.horizontal-containers').offsetWidth}`,
	},
});

for (let i = 0; i < numberOfBox; i++) {
	gsap.to(`.box${i + 1}`, {
		rotation: 720,
		scrollTrigger: {
			trigger: `.box${i + 1}`,
			start: 'left 40%',
			end: 'right 20%',
			scrub: true,
			markers: true,
			// To activate tweens in horizontal scroll containers,
			// containerAnimation method must be designated
			containerAnimation: horizontalScrollContainerAnimation,
		},
	});
}
