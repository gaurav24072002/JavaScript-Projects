const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const inc = document.getElementsByClassName('increase');
const dec = document.getElementsByClassName('decrease');


let x;
let y;
let size = 20;
// inc.addEventListener('click', () => {
//     size = size + 1;
// })

// dec.addEventListener('click', () => {
//     size = size - 1;
// })


isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed == true){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawcircle(x2,y2);
        drawlLine(x,y,x2,y2);

        x = x2;
        y = y2;
    }
})



function drawcircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}



function drawlLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}
