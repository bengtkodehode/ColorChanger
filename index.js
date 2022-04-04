const colorBox = document.getElementById('box');
const websiteBkg = document.querySelector("body");

document.querySelector('button').addEventListener('click', () => {
    const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    
    colorBox.textContent = color;
    colorBox.style.color = 'white';
    colorBox.style.backgroundColor = color;
    
    websiteBkg.style.backgroundColor = color;

    function randomColor() {
    return Math.floor(255 * Math.random());
    }

});






