import Chromata from './chromata';

const imageUrl = 'assets/images/face.jpg';

var image = document.querySelector('#image'),
    chromata;

chromata = new Chromata(image, {
    pathFinderCount: 1,
    speed: 9,
    turningAngle: Math.PI/2,
    colorMode: 'color',
    lineWidth: 2,
    lineMode: 'smooth',
    compositeOperation: 'saturation',
    origin: ['bottom'],
    outputSize: 'container', // original, container
    key: 'low',
    backgroundColor: 'hsla(34, 70%, 70%, 0)'
});
chromata.start();


document.querySelector('#toggle').addEventListener('click', e => {
    var count = chromata.toggle();
    console.log('iterations: ' + count);
});

document.querySelector('#reset').addEventListener('click', e => {
    chromata.reset();
});




