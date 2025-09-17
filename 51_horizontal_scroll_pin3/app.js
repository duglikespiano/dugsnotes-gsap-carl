const races = document.querySelector('.races');
console.log(races.offsetWidth);

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.fromTo(
	races,
	{ x: () => window.innerWidth },
	{
		x: getScrollAmount,
		duration: 3,
		ease: 'none',
	}
);

ScrollTrigger.create({
	trigger: '.racesWrapper',
	start: 'top 20%',
	end: () => `+=${getScrollAmount() * -1}`,
	pin: true,
	animation: tween,
	scrub: 1,
	invalidateOnRefresh: true,
	markers: true,
});

const sections = gsap.utils.toArray('.races div');
const maps = gsap.utils.toArray('.map');
sections.forEach((section, index) => {
	const map = maps[index];
	const mapAni = gsap.timeline({ paused: true }).to(map, { opacity: 1 }).from(map, { scale: 0.5, rotation: -20 }, 0);
	ScrollTrigger.create({
		trigger: section,
		containerAnimation: tween,
		animation: gsap.to(section.querySelector('h2'), { scale: 0.6 }),
		scrub: true,
		start: 'left 50%',
		end: 'right 50%',
		markers: true,
		onToggle: (self) => {
			if (self.isActive) {
				mapAni.play();
			} else {
				mapAni.pause(0);
			}
		},
		/* onEnter: ()=> {
      mapAni.play()
    },
    onLeave: ()=> {
      mapAni.pause(0)
    },
    onEnterBack: ()=> {
      mapAni.play()
    },
    onLeaveBack: ()=> {
      mapAni.pause(0)
    } */
	});
});
