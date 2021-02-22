let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkbox);

checkbox();

function checkbox(){
    let triggerBottom = window.innerHeight/5*4

    boxes.forEach(box => {
        let boxtop = box.getBoundingClientRect().top;
        if(boxtop <= triggerBottom){
            box.classList.add('show')
        } 
        else{
            box.classList.remove('show')
        }
    })
}