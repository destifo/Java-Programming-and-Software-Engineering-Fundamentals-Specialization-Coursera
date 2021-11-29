var canvas = document.getElementById("cnv1");
var ctx = canvas.getContext("2d");
var img;


function loadImg(file){
    img = new SimpleImage(file);
    img.drawTo(canvas);
}

function clrCanvas(){
    if (canvas != null){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
}

function makeGray(){
    var gImg = new SimpleImage(img);
    for (var px of gImg.values()){
        var avg = (px.getRed() + px.getGreen() + px.getBlue())/3;
        px.setRed(avg);
        px.setGreen(avg);
        px.setBlue(avg);
    }
    clrCanvas();
    gImg.drawTo(canvas);
}

function makeRed(){
    var rImg = new SimpleImage(img);
    for (var px of rImg.values()){
        px.setRed(255);
    }
    clrCanvas();
    rImg.drawTo(canvas);
}

function download(){
    var url = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function reset(){
    clrCanvas();
    img.drawTo(canvas);
}

