const body = document.querySelector('body');
const btnSwitch = document.querySelector('.switch');



btnSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    
})



ScrollReveal().reveal('.intro',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.about-me',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.skills',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.ecommerce',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.simulador',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.pokedex',{ delay: 300 });

ScrollReveal({ reset: true }).reveal('.alura',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.coffee',{ delay: 300 });
ScrollReveal({ reset: true }).reveal('.card',{ delay: 300 });


ScrollReveal({ reset: true }).reveal('.footer',{ delay: 400 });
