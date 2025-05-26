const sectionColors = ['dodgerblue', 'salmon', 'green', 'purple', 'maroon'];
const navColors = ['#00BFFF', '#FFA07A', '#90EE90', '#EE82EE', '#FF6347'];

//apply sectionColors to each .fullscreen element
gsap.set('.fullscreen', { backgroundColor: gsap.utils.wrap(sectionColors) });

const sections = gsap.utils.toArray('.fullscreen');

sections.forEach(function (section, index) {
	ScrollTrigger.create({
		trigger: section,
		start: 'top 100px',
		end: 'bottom 100px',
		animation: gsap.to('.nav', { backgroundColor: navColors[index], immediateRender: false }),
		toggleActions: 'restart none none reverse',
		preventOverlaps: true,
		markers: true,
	});
});
