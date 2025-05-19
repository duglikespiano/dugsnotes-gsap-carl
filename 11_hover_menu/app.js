const items = document.querySelectorAll('.item');
gsap.defaults({ duration: 0.3 });

items.forEach(function (item) {
	const timeline = gsap
		.timeline({ paused: true })
		.to(item.querySelector('.text'), {
			color: 'white',
			x: 10,
			scale: 1.2,
			transformOrigin: 'left center',
		})
		.to(item.querySelector('.dot'), { backgroundColor: '#F93', scale: 1.5 }, 0);

	item.addEventListener('mouseenter', () => timeline.play());
	item.addEventListener('mouseleave', () => timeline.reverse());
});
