function changeColor(){
    var cnv = document.getElementById('cnv1');
    var inp = document.getElementById('clr');
    var ctx = cnv.getContext('2d');
    var clrinp = inp.value;

    cnv.style.backgroundColor = clrinp;
}

function doLime(){
    var cnv = document.getElementById('cnv1');
    cnv.style.backgroundColor = 'lime';
}

function doSquare(){
    var rng = document.getElementById('rng');
    var inpval = rng.value;
    var cnv = document.getElementById('cnv1');
    var ctx = cnv.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillRect(20, 20, inpval, inpval);
}