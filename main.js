import Vector from "./vector.js";

const arrow = new Vector();

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
    arrow.rotate = angleSlider.value;
});


const drawArrow = ()=>{

    // draw background color
    context.fillStyle = "#568cb3";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Origin
    context.beginPath();
    context.arc(arrow.x1, arrow.y1, 2, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = '#ff0000';
    context.fill();

    // Draw First Point
    context.fillStyle = "#ffffff";
    context.beginPath();
    context.moveTo(arrow.x1, arrow.y1);

    // Convert Degrees to Radians
    let radians = -arrow.rotate * (Math.PI / 180);

    // Get x2 & y2 location
    arrow.x2 = Math.cos(radians) * arrow.x1 - Math.sin(radians) * arrow.y1;
    arrow.y2 = Math.sin(radians) * arrow.x1 + Math.cos(radians) * arrow.y1;

    // Draw New Line
    context.lineTo(arrow.x2, arrow.y2);
    context.stroke();

    requestAnimationFrame(drawArrow)
}

drawArrow();



