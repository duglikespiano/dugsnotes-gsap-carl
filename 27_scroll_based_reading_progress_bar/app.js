const progressHolder = document.querySelector('.progressHolder');
const progressBar = document.querySelector('.progressBar');

// 1. using toggleActions, self.animation.progress()
// ScrollTrigger.create({
// 	trigger: 'body',
// 	markers: true,
// 	animation: gsap.to(progressBar, { scaleX: 1, ease: 'none' }),
// 	start: 'top top',
// 	endTrigger: 'main',
// 	end: 'bottom bottom',
// 	toggleActions: 'none none none none', //important
// 	onLeave: (self) => {
// 		progressHolder.classList.remove('fixed');
// 	},
// 	onUpdate: (self) => {
// 		//self-reference internal animation property
// 		if (self.progress > self.animation.progress()) {
// 			self.animation.progress(self.progress);
// 		}
// 	},
// });

// 2. using toggleActions, self.animation.progress(), once
let tween = gsap.to(progressBar, {
	scale: 1,
	ease: 'none',
	paused: true,
});
ScrollTrigger.create({
	trigger: 'body',
	markers: true,
	start: 'top top',
	endTrigger: 'main',
	end: 'bottom bottom',
	// once the animation finished its work, kill() method fill be fired and it will be removed from logic including markers
	once: true,
	onLeave: (self) => {
		progressHolder.classList.remove('fixed');
	},
	onUpdate: (self) => {
		if (self.progress > tween.progress()) {
			tween.progress(self.progress);
		}
	},
});
