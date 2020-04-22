const navToggle = document.querySelector('.nav-enable');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});