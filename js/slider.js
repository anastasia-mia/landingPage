function getWidth (nameClass, target, container){
    let blocks = target .querySelectorAll('.' + nameClass + '_block');
    let singleBlockWidth = target.querySelector('.' + nameClass + '_block').offsetWidth;
    let blockGapWidth = (container.offsetWidth - (singleBlockWidth * blocks.length)) / (blocks.length - 1) + singleBlockWidth;
    let elementParameters = {
        blocks: Array.from(blocks),
        container: container,
        blockAndGapWidth: blockGapWidth
    };
    return elementParameters;
}

let sliders = document.querySelectorAll('.slider');
let switches = document.querySelectorAll('.switches');
if(window.innerWidth <= 905){
    document.querySelector('.subscription_block').classList.add('active');
    document.querySelector('.reviews_block').classList.add('active');
}
document.querySelector('.subscription_switch').style.backgroundColor = '#043873';
document.querySelector('.reviews_switch').style.backgroundColor = '#043873';
sliders.forEach((e) =>{
    let num = 0;
    let start = 0;
    e.addEventListener('click', (ev) =>{
        let nameClass = e.classList[1];
        let container = e.querySelector('.' + nameClass + '_container');
        let element = getWidth(nameClass, e, container);
        if(window.innerWidth <= 905 && container.offsetWidth > window.innerWidth){
            let target = ev.target.closest('.' + nameClass + '_block');
            if(num !== target.dataset.index){
                element.blocks.forEach(block => {
                    block.classList.remove('active');
                })
                if(target.dataset.index < num){
                    start += element.blockAndGapWidth;
                    element.container.style.transform = 'translate(' + start +'px)';
                }
                else if(target.dataset.index > num){
                    start -= element.blockAndGapWidth;
                    element.container.style.transform = 'translate(' + start + 'px)';
                }
                num = target.dataset.index;
                target.classList.add('active');
            }
    }
    })
})

switches.forEach((e) => {
    let point = 0;
    let start = 0;
    e.addEventListener('click', (ev) =>{
        let nameClass = e.classList[0].substring(0, e.classList[0].indexOf('_'));
        let container = e.previousElementSibling;
        let slider = document.querySelector('.' + nameClass);
        let element = getWidth(nameClass, slider, container);
        let switchesArray = Array.from(e.children)
        if(point !== ev.target.dataset.number && ev.target.classList.contains('switch')){
            for( let i in switchesArray){
                switchesArray[i].style.backgroundColor = '#4F9CF9';
                element.blocks[i].classList.remove('active');
            }
            ev.target.style.backgroundColor = '#043873';
            element.blocks[ev.target.dataset.number].classList.add('active');
            let difference = ev.target.dataset.number - point;
            if(ev.target.dataset.number < point){
                start += Math.abs(element.blockAndGapWidth * difference);
                container.style.transform = 'translate(' + start +'px)';
            }
            else if(ev.target.dataset.number > point){
                start -= element.blockAndGapWidth * difference;
                container.style.transform = 'translate(' + start + 'px)';
            }
            point = ev.target.dataset.number;
        }
    })
})
