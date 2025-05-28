const sectionColors = ['dodgerblue', 'salmon', 'green', 'purple', 'maroon'];
const navColors = ['#00BFFF', '#FFA07A', '#90EE90', '#EE82EE', '#FF6347'];

//apply sectionColors to each .fullscreen element
gsap.set('.fullscreen', { backgroundColor: gsap.utils.wrap(sectionColors) });

const sections = gsap.utils.toArray('.fullscreen');
let navHeight = document.querySelector('.nav').offsetHeight;

sections.forEach(function (section, index) {
	ScrollTrigger.create({
		trigger: section,
		// To update start and end value whenever the width of screen changes, the values must be changed into function from just a value
		// start: `top ${navHeight}` <-- X,
		// end: `bottom ${navHeight}` <-- X,
		start: () => `top ${navHeight}`,
		end: () => `bottom ${navHeight}`,
		onEnter: () => gsap.to('.nav', { backgroundColor: navColors[index] }),
		onEnterBack: () => gsap.to('.nav', { backgroundColor: navColors[index] }),
		markers: true,
	});
});

// Whenever the width of screen changes, the navHeight must be calculated again
ScrollTrigger.addEventListener('refreshInit', () => {
	navHeight = document.querySelector('.nav').offsetHeight;
});

// Window's resize event listener looks like similar with it but timing which window's resize event listener fires is 'after' window has been resized
// So it can be outdated in some case
// On the other hand, ScrollTrigger's refreshInit listener fires right before whenever the scroll trigger recalcuate the start and end point
// So it is more correct than window's resize event listener
// window.addEventListener('resize', () => {
// 	navHeight = document.querySelector('.nav').offsetHeight;
// });
