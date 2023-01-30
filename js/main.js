const body = document.querySelector('body');
const btnSwitch = document.querySelector('.switch');
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');


abrir.addEventListener('click', () =>{
    nav.classList.add('visible')
});

cerrar.addEventListener('click', () =>{
    nav.classList.remove('visible')
});


btnSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    
})



ScrollReveal().reveal('.intro',{ delay: 360 });
ScrollReveal().reveal('.about-me',{ delay: 360 });
ScrollReveal().reveal('.skills',{ delay: 360 });
ScrollReveal().reveal('.ecommerce',{ delay: 360 });
ScrollReveal().reveal('.simulador',{ delay: 360 });
ScrollReveal().reveal('.pokedex',{ delay: 360 });

ScrollReveal({ reset: true }).reveal('.alura',{ delay: 360 });
ScrollReveal().reveal('.coffee',{ delay: 360 });
ScrollReveal().reveal('.card',{ delay: 360 });


ScrollReveal().reveal('.footer',{ delay: 300 });
