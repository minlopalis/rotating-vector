import Vector from "./vector.js";

const line = new Vector(100, 0);

// Setup Canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


// Setup Angle Slider and Label
const angleSlider = document.getElementById('angleSlider');
const angleLabel = document.getElementById('angleLabel')

angleSlider.addEventListener('input', ()=>{
    console.log(angleSlider.value);
    angleLabel.innerText = angleSlider.value + 'deg';
    line.rotate = angleSlider.value;
});


let start = new Vector(300,300);

const drawline = ()=>{

    // draw background color
    context.fillStyle = "#568cb3";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Origin
    context.beginPath();
    context.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = '#ff0000';
    context.fill();

    // Draw First Point
    context.fillStyle = "#ffffff";
    context.beginPath();
    context.moveTo(start.x, start.y);

    // Convert Degrees to Radians
    // using -radians to invert rotation
    let radians = -line.rotate * (Math.PI / 180);

    // Get x2 & y2 location
    let x2 = start.x + Math.cos(radians) * line.x - Math.sin(radians) * line.y;
    let y2 = start.y + Math.sin(radians) * line.x + Math.cos(radians) * line.y;

    // Draw New Line
    context.lineTo(x2, y2);
    context.stroke();

    requestAnimationFrame(drawline)
}

drawline();



