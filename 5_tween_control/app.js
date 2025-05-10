// A tween's aniamtion can be controlled by play, pause, reverse, restart method

const tween = gsap.to('.box1', {
	x: 400,
	y: 400,
	skewX: 10,
	rotate: 360,
	opacity: 1,
	duration: 5,
	paused: true,
	ease: 'linear',
});

const playAniamtionButton = document.querySelector('button#play');
const pauseAniamtionButton = document.querySelector('button#pause');
const reverseAniamtionButton = document.querySelector('button#reverse');
const restartAniamtionButton = document.querySelector('button#restart');

playAniamtionButton.addEventListener('click', () => tween.play());
pauseAniamtionButton.addEventListener('click', () => tween.pause());
reverseAniamtionButton.addEventListener('click', () => tween.reverse());
restartAniamtionButton.addEventListener('click', () => tween.restart());
