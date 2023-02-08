let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.header_menu');
burger.addEventListener('click', function (){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
})

let languageSelection = document.querySelector('.footer_language');
languageSelection.addEventListener('click', (e) =>{
    let currentLanguage = e.currentTarget;
    let chosenLanguage = e.target;
    console.log(currentLanguage.firstElementChild);
    if(chosenLanguage.parentNode.tagName === 'UL'){
        currentLanguage.firstElementChild.innerText = chosenLanguage.innerText;
    }
    else{
        return false;
    }
})
