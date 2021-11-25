var fimg = null;
var bimg = null;
var fcanvas = null;
var bcanvas = null;
var oimg = null;

function loadFgImg(file){
    fcanvas = document.getElementById("cnv1");
    fimg = new SimpleImage(file);
    fimg.drawTo(fcanvas);
    
}

function loadBgImg(file){
    bcanvas = document.getElementById("cnv2");
    bimg = new SimpleImage(file);
    bimg.drawTo(bcanvas);
}

function clrCanvas(){
    if (bcanvas != null){
        var bCtx = bcanvas.getContext("2d");
        bCtx.clearRect(0, 0, bcanvas.width, bcanvas.height);
    }
    if (fcanvas != null){
        var fCtx = fcanvas.getContext("2d");
        fCtx.clearRect(0, 0, fcanvas.width, fcanvas.height);
    } 
}

function doGreenScreen(){
    if (bimg == null || !bimg.complete()){
        alert('Error while accessing the background image');
        return;
    }
    if (fimg == null || !bimg.complete()){
        alert('Error while accessing the foreground image');
        return;
    }
    oimg = new SimpleImage(fimg.getWidth(), fimg.getHeight());
    for (var pixel of fimg.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        
        if (pixel.getGreen() > pixel.getBlue() + pixel.getRed()){
            oimg.setPixel(x, y, bimg.getPixel(x, y));
        }
        else{
            oimg.setPixel(x, y, pixel);
        }
    }
    clrCanvas();
    oimg.drawTo(fcanvas);
}