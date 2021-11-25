function upload(file){
    var canvas = document.getElementById("cnv1");
    var filename = document.getElementById("finput");
    var img = new SimpleImage(filename);
    img.drawTo(canvas);
}