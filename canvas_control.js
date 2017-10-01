var canvas,
    ctx;
var prevX = 0,
    prevY = 0,
    currX = 0,
    currY = 0;
var drawing = false;
var width,
    height;
    
var line = {x0:"0", y0:"0", x1:"0", y1:"0"};

function init(){
    //  initiating variables
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;

    //  adding event listener
    canvas.addEventListener("mousedown", function(e){
        drawing = true;
        line.x0 = e.clientX - canvas.offsetLeft;
        line.y0 = e.clientY - canvas.offsetTop;
        // line.x1 = e.clientX - canvas.offsetLeft;
        // line.y1 = e.clientY - canvas.offsetTop;
    }, false)

    canvas.addEventListener("mousemove", function(e){
        if(drawing){
            line.x1 = e.clientX - canvas.offsetLeft;
            line.y1 = e.clientY - canvas.offsetTop;
            draw_my_line(line);
        }

    }, false);
    canvas.addEventListener("mouseup", function(e){
        drawing = false;
    }, false);
    canvas.addEventListener("mouseout", function(e){
        drawing = false;
    }, false);
}

function draw_my_line(l){
    //  clear the cavas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //  draw the line
    ctx.beginPath();
    ctx.moveTo(l.x0, l.y0);
    ctx.lineTo(l.x1, l.y1);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(line.x0, line.y0);
    // ctx.lineTo(line.x1, line.y1);
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 2;
    // ctx.stroke;
    // ctx.closePath();
}
