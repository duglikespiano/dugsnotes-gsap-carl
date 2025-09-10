// https://gsap.com/docs/v3/Plugins/ScrollTrigger/
/* invalidateOnRefresh 
Boolean - If true, the animation associated with the ScrollTrigger will have its invalidate() method called whenever a refresh() occurs (typically on resize). This flushes out any internally-recorded starting values.
*/

// To make the animation responsive, function based values need to be used

const races = document.querySelector('.races');
console.log(races.offsetWidth);

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: 'none',
});

ScrollTrigger.create({
	trigger: '.racesWrapper',
	start: 'top 20%',
	end: () => `+=${getScrollAmount() * -1}`,
	pin: true,
	animation: tween,
	scrub: 1,
	invalidateOnRefresh: true,
	markers: true,
});
