// There are four ways to toggle animation

// 1. Using classic toggleActions method
// ScrollTrigger.create({
// 	trigger: '.container2',
// 	start: 'top center',
// 	end: 'bottom center',
// 	markers: true,
// 	animation: gsap.to('.container2', {
// 		backgroundColor: 'navy',
// 	}),
// 	// onEnter onLeave onEnterBack onLeaveBack
// 	toggleActions: 'play reverse play reverse',
// });

// 2. Using onToggle with condition(if statement)
ScrollTrigger.create({
	trigger: '.container2',
	start: 'top 50%',
	end: 'bottom 50%',
	markers: true,
	onToggle: (self) => {
		if (self.isActive) {
			gsap.to('.container2', { backgroundColor: 'yellow' });
		} else {
			gsap.to('.container2', { backgroundColor: 'white' });
		}
	},
});

// 3. Using onToggle with condition(ternary)
// ScrollTrigger.create({
// 	trigger: '.container2',
// 	start: 'top 50%',
// 	end: 'bottom 50%',
// 	markers: true,
// 	onToggle: (self) => {
// 		gsap.to('.container2', {
// 			backgroundColor: self.isActive ? 'yellow' : 'white',
// 		});
// 	},
// });

// 4. Using onToggle onToggle Tween Toggle
// ScrollTrigger.create({
// 	trigger: '.container2',
// 	start: 'top 50%',
// 	end: 'bottom 50%',
// 	markers: true,
// 	animation: gsap.to('.container2', { backgroundColor: 'yellow' }),
// 	onToggle: (self) => {
// 		self.animation.reversed(!self.isActive);
// 	},
// });
