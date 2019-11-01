function navSlide() {
    const lines3 = document.querySelector('.lines3');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    lines3.addEventListener('click',() => {
        nav.classList.toggle('nav-active');    


        navLinks.forEach((link, index) => {
            console.log(index);
 

    if(link.style.animation) {
        link.style.animation = '';
    }
    else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/6 + 1.7}s`;
    }
});
lines3.classList.toggle("toggle");
});
}

navSlide();