const demo = document.querySelector('.demo');
const box = document.querySelector('.box');
const dot = document.querySelector('.dot');
const nav = document.querySelector('.nav');
const labels = document.querySelector('.labels');
const output = document.querySelector('.output');
let property = document.querySelector('input[name="property"]:checked').value;

const values = {
	keywordsHorizontal: ['left', 'center', 'right'],
	keywordsVertical: ['top', 'center', 'bottom'],
	keywordsArray: [],
	pixelsHorizontal: ['0', '150px', '300px'],
	pixelsVertical: ['0', '150px', '300px'],
	pixelsArray: [],
	percentsHorizontal: ['0', '50%', '100%'],
	percentsVertical: ['0', '50%', '100%'],
	percentsArray: [],
};

const label = document.querySelector('.label');

function generateValues(type) {
	for (let v = 0; v < 3; v++) {
		for (let h = 0; h < 3; h++) {
			console.log(values[type + 'Horizontal'][h], values[type + 'Vertical'][v]);
			values[type + 'Array'].push(`${values[type + 'Horizontal'][h]} ${values[type + 'Vertical'][v]}`);
		}
	}
}

function createLabels() {
	let n = 0;
	for (let v = 0; v < 3; v++) {
		for (let h = 0; h < 3; h++) {
			let l = label.cloneNode();
			labels.appendChild(l);
			l.classList.add('newLabel');
			gsap.set(l, {
				position: 'absolute',
				textContent: values.pixelsArray[n],
				x: values.pixelsHorizontal[h],
				y: values.pixelsVertical[v],
			});
			l.addEventListener('click', (e) => {
				console.log(e.target.textContent);
				gsap.set('.box', { transformOrigin: e.target.textContent.toString() });
				gsap.fromTo('.box', { rotation: 0 }, { rotation: 360, ease: 'none', duration: 1 });
			});
			n++;
		}
	}
	gsap.set('.labels', { x: -210, y: -170 });
}
generateValues('pixels');
generateValues('percents');
generateValues('keywords');

createLabels();
const newLabels = document.querySelectorAll('.newLabel');

const radios = document.getElementsByName('property');
for (var i = 0, length = radios.length; i < length; i++) {
	radios[i].addEventListener('change', updateProperty);
}

function updateProperty() {
	property = document.querySelector('input[name="property"]:checked').value;
	newLabels.forEach(function (e, i) {
		gsap.set(e, { textContent: values[property + 'Array'][i] });
	});
}
