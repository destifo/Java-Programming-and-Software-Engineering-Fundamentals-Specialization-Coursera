var img;
var canvas;
var greyImg;

function upload(file){
    canvas = document.getElementById("cnv1");
    var filename = document.getElementById("finput");
    greyImg = new SimpleImage(filename);
    img = new SimpleImage(filename);
    img.drawTo(canvas);
}

function makeGrey(){
    for (var pixel of greyImg.values()){
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
        pixel.setRed(avg);
        pixel.setBlue(avg);
        pixel.setGreen(avg);
    }
    var greyCanvas = document.getElementById("cnv2");
    greyImg.drawTo(greyCanvas);
}