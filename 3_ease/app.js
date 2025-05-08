// The accelaration of the animation can be determined by 'ease' property
gsap.to('.box1', { x: 200, opacity: 1, duration: 2, repeat: -1, ease: 'linear' });
gsap.to('.box2', { x: 200, opacity: 1, duration: 2, repeat: -1, ease: 'back' });
gsap.to('.box3', { x: 200, opacity: 1, duration: 2, repeat: -1, ease: 'bounce.inOut' });
gsap.to('.box4', { x: 200, opacity: 1, duration: 2, repeat: -1, ease: 'elastic' });
