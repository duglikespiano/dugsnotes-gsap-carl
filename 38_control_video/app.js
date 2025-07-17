var video = document.getElementById('video');

ScrollTrigger.create({
	trigger: 'video',
	start: 'top 50%',
	end: '50% top',
	markers: true,
	onEnter: () => video.play(),
	onLeave: () => video.pause(),
	onLeaveBack: () => video.pause(),
	onEnterBack: () => video.play(),
});
