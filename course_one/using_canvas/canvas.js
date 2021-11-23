function doYellow(){
    var cnv = document.getElementById('cnv1');
    cnv.style.backgroundColor = 'yellow';
    let ctx = cnv.getContext('2d');
    ctx.clearRect(0, 0, cnv.width, cnv.height);
}

function doGreen(){
    var cnv = document.getElementById('cnv1');
    cnv.style.backgroundColor = 'white';
    var ctx = cnv.getContext("2d");
    ctx.fillStyle = 'blue';
    ctx.fillRect(20, 20, 80, 80);
    ctx.fillStyle = 'orange';
    ctx.font = '20px Arial';
    ctx.fillText('Moshimosh', 20, 130);

}