const tl = gsap.timeline();

function initHeaders() {
	//make a clone of the h1 tag
	let header = document.querySelector('.rotatingHeader');
	let original = header.querySelector('h1');
	let clone = original.cloneNode(true);
	header.appendChild(clone);

	//split the text in original h1 and clone
	let originalSplit = SplitText.create(original, { type: 'chars' });
	let cloneSplit = SplitText.create(clone, { type: 'chars' });

	//global tween settings
	let duration = 1;
	let stagger = { each: 0.02, from: 'start', ease: 'power2' };

	tl.to(originalSplit.chars, { duration: duration, yPercent: -100, stagger: stagger }).to(
		cloneSplit.chars,
		{ duration: duration, yPercent: -100, stagger: stagger },
		0
	);
}

initHeaders();

GSDevTools.create({ animation: tl });
