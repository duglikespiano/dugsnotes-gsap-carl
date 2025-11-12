const rotatingHeaders = document.querySelectorAll('.rotatingHeader');

function initHeaders() {
	rotatingHeaders.forEach((header, index) => {
		let original = header.querySelector('h1');
		let clone = original.cloneNode(true);
		header.appendChild(clone);
		gsap.set(clone, { yPercent: -100 });
		header.originalSplit = SplitText.create(original, { type: 'chars' });
		header.cloneSplit = SplitText.create(clone, { type: 'chars' });
		ScrollTrigger.create({
			trigger: header,
			start: 'top 50%',
			end: 'bottom 30%',
			//markers:true,
			//scrub:true,
			toggleActions: 'play none none reverse',
			animation: createHeaderAnimation(header),
			invalidateOnRefresh: true,
		});
	});
}

function createHeaderAnimation(header) {
	console.log('createHeader');
	let duration = 0.4;
	let stagger = { each: 0.03, ease: 'power1', from: 'start' };
	gsap.set(header.cloneSplit.chars, { opacity: 0 });

	let tl = gsap.timeline();
	tl.set(header.cloneSplit.chars, {
		rotationX: -90,
		transformOrigin: () => {
			let height = header.offsetHeight;
			return `50% 50% -${height / 2}`;
		},
	});

	tl.to(header.originalSplit.chars, {
		duration: duration,
		rotationX: 90,
		transformOrigin: () => {
			let height = header.offsetHeight;
			return `50% 50% -${height / 2}`;
		},
		stagger: stagger,
	});
	tl.to(header.originalSplit.chars, { duration: duration, opacity: 0, stagger: stagger, ease: 'power2.in' }, 0);

	tl.to(header.cloneSplit.chars, { duration: 0.1, opacity: 1, stagger: stagger }, 0.001);
	tl.to(header.cloneSplit.chars, { duration: duration, rotationX: 0, stagger: stagger }, 0);
	return tl;
}

initHeaders();

gsap.config({ trialWarn: false });
