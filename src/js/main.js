// Open/close mobile menu
const hamburgerIcon = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const navLinks = navList.querySelectorAll('a');

hamburgerIcon.addEventListener('click', ()=>{ navList.classList.toggle('active'); })

// Close mobile menu when click on link in nav list
navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navList.classList.remove('active');
    });
})


// Close mobile menu on screen > 1200px
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        navList.classList.remove('active');
    }
});

// Dynamic date
document.getElementById("year").textContent = new Date().getFullYear();