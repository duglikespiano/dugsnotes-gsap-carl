/* 

When the top of the gallery reaches the top of the viewport we want to pin the element with a class of “.right” 

The pinning will end when the bottom of the gallery reaches the bottom of the viewport. 

*/
ScrollTrigger.create({
	trigger: '.gallery',
	strart: 'top top',
	end: 'bottom bottom',
	pin: '.right',
});
