// Your code goes here

//Event 1 - Double Click
const moveBus = document.querySelector('img')
moveBus.addEventListener('dblclick', () => {
    moveBus.style.transform = "scale(.75)";
})

//Event 2 - Mouse Enter
const navBackground = document.querySelector('.main-navigation')
navBackground.addEventListener('mouseenter', () => {
    navBackground.style.backgroundColor = 'lightgray';
})

//Event 3 - Mouse Leave
navBackground.addEventListener('mouseleave', () => {
    navBackground.style.backgroundColor = 'white';
})

//Event 4 - Wheel
const background = document.querySelector('body')
background.addEventListener('wheel', () => {
    background.style.backgroundColor = 'rgba(176, 196, 222, .2)';
})

//Event 5 - Mouse Move
const headings = document.querySelectorAll('h2')
headings.forEach(heading => {
    heading.addEventListener('mousemove', () => {
        heading.style.color = 'orange';
    })
})

//Event 6 - Mouse Over
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.25)'
        button.style.backgroundColor = 'yellow'
    })
})

//Event 7 - Mouse Out
buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)'
        button.style.backgroundColor = '#17A2B8'
    })
})

//Event 8 - Click
const rotateLogo = document.querySelector('.logo-heading')
rotateLogo.addEventListener('click', () => {
    rotateLogo.style.transform = 'rotateY(360deg)'
    rotateLogo.style.transition = '5s'
})

//Event 9 - Context Menu
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
    link.addEventListener('contextmenu', () => {
        link.style.color = 'turquoise';
    })
})

//Event 10 - Load
const rotateImgs = document.querySelectorAll('img')
rotateImgs.forEach(image => {
    image.addEventListener('load', () => {
        image.style.transform = 'rotateX(360deg)'
        image.style.transition = '5s'
    })
})

// Event Propagation
const home = document.querySelector('.home')
home.addEventListener('click', () => {
    home.style.backgroundColor = 'lightseagreen'
})

const destSection = document.querySelector('.content-pick')
destSection.addEventListener('click', () => {
    destSection.style.backgroundColor = '#17A2B8'
})

const destDivs = document.querySelectorAll('.destination')
destDivs.forEach(div => {
    div.addEventListener('click', (event) => {
        div.style.backgroundColor = 'coral';
        event.stopPropagation();
    })
})

// Prevent Default
const stopRefresh = document.querySelectorAll('a')
stopRefresh.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})
