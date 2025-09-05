// This code works properly in the case the content of each box doesn't overflow to other boxes

const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)');

gsap.set(photos, { yPercent: 101 });

const animation = gsap.to(photos, {
	yPercent: 0,
	duration: 1,
	stagger: 1,
});

ScrollTrigger.create({
	trigger: '.gallery',
	start: 'top top',
	end: 'bottom bottom',
	pin: '.right',
	animation: animation,
	scrub: true,
});
