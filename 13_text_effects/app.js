gsap.registerPlugin(SplitText, TextPlugin);

// 1. Simple editing text
gsap.to('.edit-text', { text: "Let's dive into GSAP's text effects", duration: 5 });

// 2. Splitting text by characters
const splitTextByCharactersTimeline = gsap.timeline({});
const splitTextByCharacters = new SplitText('.split-text-by-characters', { type: 'chars' });
splitTextByCharactersTimeline.from(splitTextByCharacters.chars, { opacity: 0, y: 10, stagger: 0.05 });

// 3. Splitting text by words
const splitTextByWordsTimeline = gsap.timeline({});
const splitTextByWords = new SplitText('.split-text-by-words', { type: 'words' });
splitTextByWordsTimeline.from(splitTextByWords.words, { opacity: 0, rotation: -40, scale: 0.4, stagger: 0.1, ease: 'back' });

// 4. Splitting text by lines
const splitTextByLinesTimeline = gsap.timeline({});
const splitTextByLines = new SplitText('.split-text-by-lines', { type: 'lines' });
splitTextByWordsTimeline.from(splitTextByLines.lines, {
	opacity: 0,
	rotationX: -90,
	rotationY: -80,
	stagger: 0.1,
	transformOrigin: '50% 50% -200',
});
