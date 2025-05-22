gsap.defaults({ ease: 'none' });

// There are three points to make parallax scroll animation by gsap
// 1. The elements' animation should be controlled at the same time
// 2. When timeline is being used for the animation, the start point of animation should be synced by parameter
// 3. It's comfortable to make it with 'from' method

// Parallax animation with scroll trigger scrub
// end point should be designated for smooth animation
const tl = gsap
	.timeline({
		scrollTrigger: {
			trigger: '.content-wrapper',
			start: 'top 25%',
			end: '+=100',
			toggleActions: 'restart none none reverse',
			markers: true,
			scrub: 0.5,
		},
	})
	.from('.background', { y: 50 })
	.from('.middleground', { y: 150 }, 0)
	.from('.foreground', { y: 250 }, 0)
	.from('.text', { y: 500 }, 0);

// Parallax animation without scroll trigger scrub
// const tl = gsap
// 	.timeline({
// 		scrollTrigger: {
// 			trigger: '.content-wrapper',
// 			start: 'top 25%',
// 			toggleActions: 'restart none none reverse',
// 			markers: true,
// 		},
// 	})
// 	.from('.background', { y: 50, duration: 3 })
// 	.from('.middleground', { y: 150, duration: 3 }, 0)
// 	.from('.foreground', { y: 250, duration: 3 }, 0)
// 	.from('.text', { y: 500, duration: 3 }, 0);
