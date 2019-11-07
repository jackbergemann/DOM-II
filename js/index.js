// Your code goes here

document.getElementsByTagName('img')[0].addEventListener('mouseover', (e) => {
    e.target.style.opacity = ".5";
});

document.addEventListener("keydown", keyPress);

function keyPress(e) {
    if (e.keyCode == 65) {
        alert('The "a" key has been pressed!')
    };
};

document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
});

document.getElementsByTagName('img')[1].addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'scale(1.3)';
});

document.getElementsByTagName('img')[1].addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'scale(1)';
});

document.getElementsByTagName('img')[2].addEventListener('click', (e) => {
    e.target.style.display = 'none';
});

document.getElementsByTagName('h2')[0].addEventListener('mousemove', (e) => {
    e.target.style.color = 'green';
});

document.getElementsByTagName('h2')[1].addEventListener('wheel', (e) => {
    e.target.style.color = 'blue';
});

document.getElementsByTagName('p')[0].addEventListener('dblclick', (e) => {
    e.target.style.color = 'red';
});

document.getElementsByTagName('p')[1].addEventListener('contextmenu', (e) => {
    e.target.style.color = 'orange';
});

const pick = document.querySelector('.content-pick');

pick.addEventListener('click', (e) => {
    pick.style.backgroundColor = 'green';
});

const destination = document.querySelector('.destination');

destination.addEventListener('click', (e) => {
    destination.style.backgroundColor = 'blue';
    e.stopPropagation();
});


const nav = document.querySelector('.nav-link');
nav.addEventListener('click', (e) => {
    e.preventDefault();
})
