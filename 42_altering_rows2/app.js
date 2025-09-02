// Make two different scroll trigger to control onEnter, onLeave separately

const sections = gsap.utils.toArray('.cols-2');

sections.forEach((element, index) => {
	let items = element.querySelectorAll('.item');
	let distance = index % 2 == 0 ? 100 : -100;
	let tl = gsap.timeline({ paused: true });

	tl.from(items, { duration: 0.5, xPercent: gsap.utils.wrap([-distance, distance]) });
	tl.from(items, { opacity: 0, duration: 0.3 }, 0);

	// scroll trigger1
	ScrollTrigger.create({
		trigger: element,
		start: 'top 80%',
		onEnter: () => tl.play(),
		markers: true,
	});

	// scroll trigger2
	ScrollTrigger.create({
		trigger: element,
		start: 'top 100%',
		onLeaveBack: () => tl.pause(0),
		markers: true,
	});
});
