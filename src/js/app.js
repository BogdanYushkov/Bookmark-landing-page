const nav = document.getElementById('nav');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.s-control');
const form = document.getElementById('form');
const mailField = document.getElementById('email');


const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', event => {
    event.preventDefault();
    const isValidEmail = emailRegex.test(mailField.value);
    if(!isValidEmail) {
        form.classList.add('is-error');
        return;
    } 
    form.classList.remove('is-error');
    console.log(mailField.value);
    
});


iconMenu.addEventListener('click', () => {
    nav.classList.add('is-active');
})

iconClose.addEventListener('click', () => {
    nav.classList.remove('is-active');
})


controls.forEach((control, idx) => {
    control.addEventListener('click', () => {
        controls.forEach(el => el.classList.remove('is-active'));
        controls[idx].classList.add('is-active');
        slides.forEach(el => el.classList.remove('is-active'));
        slides[idx].classList.add('is-active');
    })
})
