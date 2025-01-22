document.getElementById('theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Trigger the pop-up animation for the About Me section after the page loads
window.onload = function() {
    const aboutMe = document.getElementById('about-me');
    aboutMe.classList.add('pop-up');
};
