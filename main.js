const stars = document.querySelector('#stars');
const moon = document.querySelector('#moon');
const mountains_front= document.querySelector('#mountains_front');
const mountains_behind = document.querySelector('#mountains_behind');
const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const header = document.querySelector('header');



window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * .25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * .5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * .5 + 'px';
})