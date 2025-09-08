const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)');

const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)');

gsap.set(photos, { yPercent: 101 });

ScrollTrigger.create({
	trigger: '.gallery',
	start: 'top top',
	end: 'bottom bottom',
	pin: '.right',
	scrub: true,
});

details.forEach((detail, index) => {
	let headline = detail.querySelector('h1');
	ScrollTrigger.create({
		trigger: headline,
		start: 'top 80%',
		end: 'top 50%',
		animation: gsap.to(photos[index], { yPercent: 0 }),
		scrub: true,
		markers: false,
	});
});
