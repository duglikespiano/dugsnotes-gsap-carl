// Point of this page is to make make splitLinesTrigger
// It looks like it animates well without splitLinesTrigger
// But as it's starting point changes because of transform proterty(gsap.from),
// The trigger start point gets affected by it and it makes unintended animation
// To prevent the bug, make a separate trigger point and control elements want to animate
// overflow: hidden can be used to prevent showing unintended element shifting

let splitLines;
splitLines = new SplitText('.text', { type: 'lines', linesClass: 'line' });

let splitLinesTrigger;
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
