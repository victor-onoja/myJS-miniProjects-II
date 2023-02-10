const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const nav = document.getElementById('nav');
const backToTop = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

window.addEventListener('scroll', function(){
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;
    // const linksHeight = links.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav');
    }
    else {
        nav.classList.remove('fixed-nav');
    }

    // if (scrollHeight > linksHeight){
    //     linksContainer.style.height = 0;
    // } 

    if (scrollHeight > 500) {
        backToTop.classList.add('show-link');
    } else {
        backToTop.classList.remove('show-link');
    }
});

scrollLinks.forEach(function(link){
link.addEventListener('click', function(e){
    e.preventDefault();
    
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
        position = position - navHeight;
    }

    if (navHeight > 82) {
        position = position + containerHeight
    }

    window.scrollTo({
        left: 0,
        top: position
    });
    linksContainer.style.height = 0
});
});