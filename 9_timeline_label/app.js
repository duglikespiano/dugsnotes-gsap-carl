// User can put labels on a timeline to mark specific points
// https://gsap.com/docs/v3/GSAP/Timeline/addLabel()
// https://gsap.com/docs/v3/GSAP/Timeline/add()

const timeline = gsap.timeline({ paused: true });
timeline
	.to('.box1', { x: 200, opacity: 1, duration: 2 })
	.to('.box2', { x: 200, opacity: 1, duration: 2 })
	.to('.box3', { x: 200, opacity: 1, duration: 2 })
	.addLabel('label')
	.to('.box4', { x: 200, opacity: 1, duration: 2 });

const playAniamtionButton = document.querySelector('button#play');
const pauseAniamtionButton = document.querySelector('button#pause');
const reverseAniamtionButton = document.querySelector('button#reverse');
const restartAniamtionButton = document.querySelector('button#restart');

playAniamtionButton.addEventListener('click', () => timeline.play('label'));
pauseAniamtionButton.addEventListener('click', () => timeline.pause());
reverseAniamtionButton.addEventListener('click', () => timeline.reverse());
restartAniamtionButton.addEventListener('click', () => timeline.restart());
