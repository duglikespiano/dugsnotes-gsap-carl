// using scrollTo plugin alongside scroll-behavior: smooth in CSS will cause conflicts
gsap.set('.fullscreen', { backgroundColor: gsap.utils.wrap(['#42A5F5', '#1d1d1d', '#B0BEC5', '#009688']) });

const tl = gsap.timeline().from('.monster', { scale: 0, opacity: 0 }).from('h1', { y: 50, opacity: 0 });

const jumpSection = ScrollTrigger.create({
	animation: tl,
	trigger: '#monsterSection',
	start: 'top top',
	pin: true,
	scrub: true,
});

// scroll trigger will update start and end point on resizing by applying start and end method
// below is example of combination of scrollTrigger.fromTo and scrollTo plugin
// when the event fires, it plays two stepped animation
const jump = document.querySelector('#jump');
jump.addEventListener('click', () => {
	gsap.fromTo(window, { scrollTo: jumpSection.start }, { scrollTo: jumpSection.end, duration: 1, ease: 'none' });
});
