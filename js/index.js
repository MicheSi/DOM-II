// Your code goes here
const moveBus = document.querySelector('img')
moveBus.addEventListener('dblclick', () => {
    moveBus.style.transform = "scale(.75)";
})

const navBackground = document.querySelector('.main-navigation')
navBackground.addEventListener('mouseenter', () => {
    navBackground.style.backgroundColor = 'lightgray';
})