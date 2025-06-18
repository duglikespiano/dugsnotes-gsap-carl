gsap.defaults({ ease: 'none', duration: 2 });

const tl = gsap.timeline();
tl.from('.orange', { xPercent: -100 }).from('.purple', { xPercent: 100 }).from('.green', { yPercent: -100 });

// pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer.
ScrollTrigger.create({
	animation: tl,
	trigger: '#container',
	start: 'top top',
	end: '+=5000vh',
	scrub: true,
	pin: true,
	// anticipatePin - If you pin large sections/panels you may notice what looks like a slight delay in pinning when you scroll quickly. That's caused by the fact that most modern browsers handle scroll repaints on a separate thread, so at the moment of pinning the browser may have already painted the pre-pinned content, making it visible for perhaps 1/60th of a second. The only way to counteract that is to have ScrollTrigger monitor the scroll velocity and anticipate the pin, applying it slightly early to avoid that flash of unpinned content. A value of anticipatePin: 1 is typically fine, but you can reduce or increase that number to control how early it does the pinning. In many cases, however, you don't need any anticipatePin (the default is 0).
	// https://gsap.com/docs/v3/Plugins/ScrollTrigger/
	anticipatePin: 1,
	markers: true,
});
