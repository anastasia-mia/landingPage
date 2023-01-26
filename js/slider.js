let blocks = document.querySelectorAll('.subscription_block');
let singleBlockWidth = document.querySelector('.subscription_block').offsetWidth;
let container = document.querySelector('.subscription_container');
let blockAndGapWidth = (container.offsetWidth - (singleBlockWidth * blocks.length)) / (blocks.length - 1) + singleBlockWidth;
let switches = document.querySelectorAll('.subscription_switch');
if(window.innerWidth <= 905){
    blocks[0].classList.add('active');
    switches[0].style.backgroundColor = '#043873';
    let num = 0;
    let start = 0;
    blocks.forEach(function(e){
        e.addEventListener('click', () =>{
            if(num !== e.dataset.index){
                blocks.forEach(block => {
                    block.classList.remove('active');
                })
                if(e.dataset.index < num){
                    start += blockAndGapWidth;
                    container.style.transform = 'translate(' + start +'px)';
                }
                else if(e.dataset.index > num){
                    start -= blockAndGapWidth;
                    container.style.transform = 'translate(' + start + 'px)';
                }
                num = e.dataset.index;
                e.classList.add('active');
                switches[e.dataset.index].style.backgroundColor = '#043873';
            }
        })
    })
}

let point = 0;
let start = 0;
switches.forEach((e) => {
    e.addEventListener('click', () =>{
        if(point !== e.dataset.index){
            switches.forEach( swittch => {
                swittch.style.background = '#4F9CF9';
            })
            blocks.forEach(block => {
                block.classList.remove('active');
            });
            e.style.backgroundColor = '#043873';
            blocks[e.dataset.number].classList.add('active');
            let difference = e.dataset.number - point;
            if(e.dataset.number < point){
                start += Math.abs(blockAndGapWidth * difference);
                container.style.transform = 'translate(' + start +'px)';
                console.log(start);
            }
            else if(e.dataset.number > point){
                start -= blockAndGapWidth * difference;
                container.style.transform = 'translate(' + start + 'px)';
                console.log(start);
            }
            point = e.dataset.number;
        }
    })
})
