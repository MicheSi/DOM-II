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

//Event 8

//Event 9

//Event 10