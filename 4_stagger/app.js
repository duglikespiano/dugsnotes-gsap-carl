// Series of same animation of a group can be determined with stagger method
// Stagger method can be expressed with both just a duration and an object of option
// Three expression below make same result
// From method in the stagger option object can determine direction of series of animation
gsap.to('.box', { x: 200, opacity: 1, stagger: 0.2 });
gsap.to('.box', {
	x: 200,
	opacity: 1,
	stagger: {
		each: 0.2,
		// from: 'end',
		// from: 'edges',
	},
});
gsap.to('.box', {
	x: 200,
	opacity: 1,
	stagger: {
		amount: 0.8,
		// from: 'end',
		// from: 'center',
	},
});
