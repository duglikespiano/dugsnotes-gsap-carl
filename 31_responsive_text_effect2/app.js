// There are two points to make text effect responsive
// Revert, kill, init all texts ScrollTrigger on resize
// Use debounce function to prevent firing the function too many times unnecessarily

let splitLines;
let splitLinesTrigger;

const init = () => {
	splitLines = new SplitText('.text', { type: 'lines', linesClass: 'line' });
	splitLinesTrigger = new SplitText('.text', { type: 'lines', linesClass: 'lineTrigger' });
	splitLines.lines.forEach((line, index) => {
		ScrollTrigger.create({
			trigger: splitLinesTrigger.lines[index],
			markers: true,
			start: 'top 95%',
			animation: gsap.from(line, { duration: 1, y: 200, opacity: 0 }),
			toggleActions: 'restart none none reverse',
		});
	});
};

// To revert ScrollTrigger, revert() method is needed
// It doesn't have to revert splitLinesTrigger too, reverting only splitLines handles the situation
// And then kill all ScrollTrigger by using kill() method
// And init ScrollTrigger again
const revertKillInitAll = () => {
	splitLines.revert();
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	init();
};

// To prevent firing the function too many times unnecessarily, debouncing function can be considered
const debounce = (func) => {
	var timer;
	return function (event) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(func, 300, event);
	};
};

window.addEventListener(
	'resize',
	debounce(function (e) {
		console.log('end of resizing');
		revertKillInitAll();
	})
);

init();
