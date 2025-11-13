const divHighlight = '#eee';

const quoteSplit = SplitText.create('.quote p', {
	type: 'words',
});

const tween = gsap.to(quoteSplit.words, { color: divHighlight, duration: 20, stagger: 20 });

ScrollTrigger.create({
	trigger: '.quote',
	start: 'top 80%',
	end: 'center 50%',
	animation: tween,
	scrub: true,
	markers: false,
});

//GSDevTools.create()
