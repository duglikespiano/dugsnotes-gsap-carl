console.clear();

const tl = gsap.timeline();

tl.call(message, ['hello', '.b1'], 0.01)
	.call(message, ['and', '.b2'], 0.1)
	.call(message, ['welcome', '.b3'], 0.2)
	.call(message, ['to', '.b4'], 0.3)
	.call(message, ['the', '.b5'], 0.4)
	.call(message, ['course', '.b6'], 0.5)
	.to({}, {}, '+=0.01'); //empty tween

function message(output, box) {
	console.log(output);
	gsap.fromTo(box, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2 });
}

GSDevTools.create({ animation: tl });

gsap.config({ trialWarn: false });
