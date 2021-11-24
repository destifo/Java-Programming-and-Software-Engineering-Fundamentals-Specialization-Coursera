var pcanvas = document.getElementById('cnv1');
var ctx = pcanvas.getContext('2d');
var color = 'black';
var radius = 50;
var isPainting = false;    

function setWidth(value){
    if (isNumeric(value)){
        pcanvas.width = value;
    }
}

function setHeight(value){
    if (isNumeric(value)){
        pcanvas.height = value;
    }
}

function clearCanvas(){
    ctx.clearRect(0, 0, pcanvas.width, pcanvas.height);
}

function changeColor(newcolor){
    color = newcolor;
}

function resizeBrush(newsize){
    radius = newsize;
    document.getElementById('sizeOutput').value = newsize;
}

function paintCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.fillStyle = color;
    ctx.fill();
}

function startPaint(){
    isPainting = true;
}

function endPaint(){
    isPainting = false;
}

function doPaint(x, y){
    if (isPainting){
        paintCircle(x, y);
    }
}

function isNumeric(value){
    return !isNaN(value);
}