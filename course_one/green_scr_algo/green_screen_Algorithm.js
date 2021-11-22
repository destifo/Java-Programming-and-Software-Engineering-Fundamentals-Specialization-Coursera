var fgimg = new SimpleImage('drewRobert.png');
var bgimg = new SimpleImage('dinos.png');

function GSA(fgimg, bgimg){
    var output = new SimpleImage(fgimg.getWidth(), fgimg.getHeight());

    for (var pixel of fgimg.values()){
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
            output.setPixel(pixel.getX(), pixel.getY(), bgimg.getPixel(pixel.getX(), pixel.getY()));
        }
        else{
            output.setPixel(pixel.getX(), pixel.getY(), pixel)
        }
    }
    return output;
}

print(GSA(fgimg, bgimg));