console.clear();
const defaultColor = '#333';
const divHighlight = '#eee';

const quoteSplit = SplitText.create('.quote p', {
	type: 'words',
});

const tl = gsap.timeline();

quoteSplit.words.forEach((word, index) => {
	tl.call(animateWord, [word], index * 1 + 0.01);
});
tl.set({}, {}, '+=0.01');

function animateWord(word) {
	console.log(st.direction);
	if (st.direction == 1) {
		gsap.to(word, { color: divHighlight });
	} else {
		gsap.to(word, { color: defaultColor });
	}
}

const st = ScrollTrigger.create({
	trigger: '.quote',
	start: 'top 80%',
	end: 'center 50%',
	animation: tl,
	scrub: true,
	markers: false,
});

gsap.config({ trialWarn: false });
