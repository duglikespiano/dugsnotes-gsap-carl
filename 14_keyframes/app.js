gsap.set('.content-wrapper', { scale: 2, yPercent: 50 });
gsap.set('.objects', { autoAlpha: 1 });

const tl = gsap.timeline();
tl.to('.objects__object', {
	keyframes: {
		'25%': { y: 0 },
		'50%': { y: -100, ease: 'sine' },
		'75%': { y: 0, ease: 'sine.in' },
		'100%': { x: 400, ease: 'none' },
	},
	duration: 2,
	stagger: 0.4,
});

play.addEventListener('click', () => tl.restart());
