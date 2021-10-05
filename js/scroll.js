// When the user scrolls down 80px from the top of the document, resize the navbar's padding
const navbar = document.querySelector('.nav');
window.onscroll = () => {
    if (window.scrollY > 60) {
        navbar.classList.add('nav-active');
        navbar.classList.add('fixed-top');
        
    } else {
        navbar.classList.remove('nav-active');
        navbar.classList.remove('fixed-top');
    }
};
