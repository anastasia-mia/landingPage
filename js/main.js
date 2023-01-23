let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.header_menu');
burger.addEventListener('click', function (){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
})