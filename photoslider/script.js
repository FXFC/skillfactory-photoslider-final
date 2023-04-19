const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const photoes = [
  { 
    img: 'image.png',
    dot: document.querySelector('.round-1'),
    text: document.querySelector('.item-1'),
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },
  {
  	img: 'image2.png',
    dot: document.querySelector('.round-2'),
    text: document.querySelector('.item-2'),
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
 },
 {
 	img: 'image3.png',
    dot: document.querySelector('.round-3'),
    text: document.querySelector('.item-3'),
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months'
}
	]

const slider = document.querySelector('.slider');

const setPhoto = (index) => {
	slider.style.backgroundImage = `url(${photoes[index].img})`;
}

const makeActive = (index) => {
	photoes[index].dot.style.opacity = 1;
	photoes[index].text.classList.add('color-hypertext');
}

const makeNotActive = (index) => {
	photoes[index].dot.style.opacity = 0.3;
	photoes[index].text.classList.remove('color-hypertext');
}

const changeTextContent = (index) => {
	document.querySelector('.city-text').textContent = photoes[index].city;
	document.querySelector('.area').textContent = photoes[index].area;
	document.querySelector('.time').textContent = photoes[index].time;
}

const pressOnElement = (index) => {
	makeNotActive(currentIndex);
	changeTextContent(index);
	currentIndex = index;
	setPhoto(currentIndex);
	makeActive(currentIndex);
}	

let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
	makeNotActive(currentIndex);

	if (currentIndex === 0) {
		currentIndex = photoes.length - 1;
	} else {
		currentIndex -= 1;
	}

	changeTextContent(currentIndex);
	setPhoto(currentIndex);
	makeActive(currentIndex);
})

arrowRight.addEventListener('click', () => {
	makeNotActive(currentIndex);

	if (currentIndex === photoes.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}

	changeTextContent(currentIndex);
	setPhoto(currentIndex);
	makeActive(currentIndex);
})

for (let i = 0; i <= photoes.length - 1; i++) {
	photoes[i].dot.addEventListener('click', () => {
		pressOnElement(i);
	});
	photoes[i].text.addEventListener('click', () => {
		pressOnElement(i);
	});
}