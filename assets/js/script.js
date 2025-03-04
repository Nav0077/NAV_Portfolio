document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
 // Scroll animation
 const sections = document.querySelectorAll("section");
 window.addEventListener("scroll", () => {
     sections.forEach(section => {
         if (section.getBoundingClientRect().top < window.innerHeight - 50) {
             section.classList.add("visible");
         }
     });
 });