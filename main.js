const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 700;
canvas.border = '1px solid red'
const context = canvas.getContext('2d');

document.body.insertBefore(canvas, document.body.childNodes[0]);

context.fillStyle = 'white'
// context.fillRect(0,0,canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

// commited, added buttons
