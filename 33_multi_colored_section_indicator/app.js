const colors = ['#F2309B', '#25C7D9', '#04BF8A', '#F2D338', '#F23030'];

gsap.set('.line', { background: gsap.utils.wrap(colors) });

// The point of this aniamtion is 'stagger' value
// If the value of stagger is too big, the line will move so quickly and the animation will not be seen easily
// If the value of stagger is too small, the each line will be seen like it is not being stagger
// So the proper value should be tested for the animation

const animation = gsap.fromTo('.line', { y: -100 }, { y: 200, ease: 'none', duration: 1, stagger: 0.7 });

ScrollTrigger.create({
	trigger: '.lineSections',
	start: 'top 300',
	end: 'bottom 300',
	markers: true,
	animation: animation,
	scrub: 1,
});
