const colors = ['#F2309B', '#25C7D9', '#04BF8A', '#F2D338', '#F23030'];

gsap.set('.line', { background: gsap.utils.wrap(colors) });

// This animation looks fine
// However when scrub is set to a numeric value, more than two color bars can appear if the user scrolls a lot in a short period of time.

const lineSections = gsap.utils.toArray('.lineSection');

lineSections.forEach((section, index) => {
	let line = section.querySelector('.line');
	ScrollTrigger.create({
		trigger: section,
		start: 'top 300',
		end: 'bottom 150',
		markers: true,
		animation: gsap.fromTo(line, { y: -100 }, { y: 200, ease: 'none' }),
		// When scrub is set as true, there's no problem
		scrub: true,

		// However when scrub is set to a numeric value, more than two color bars can appear if the user scrolls a lot in a short period of time.
		scrub: 3,
	});
});
