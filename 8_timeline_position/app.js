// The start time of an animation can be determined by third parameter in timeline instance
// https://gsap.com/docs/v3/GSAP/Timeline/
const timeline = gsap.timeline({ defaults: { x: 200, opacity: 1, duration: 0.2 } });
timeline.to('.box1', {}, '+=0.1').to('.box2', {}, '<').to('.box3', {}, '<2').to('.box4', {}, 1);
