const toTopButtonAnimation = gsap.timeline();
toTopButtonAnimation.to('.to-top', {
	bottom: '3vh',
});

ScrollTrigger.create({
	trigger: '.containers-wrapper',
	start: '75% bottom',
	animation: toTopButtonAnimation,
	toggleActions: 'play none none reverse',
	// When user's viewport moves back to top so short time,
	// user still can see reverse animation,
	// to prevent it, fastScrollEnd method can be applied
	// fastScrollEnd will end the animation like reset on toggleAction
	fastScrollEnd: true,
});
