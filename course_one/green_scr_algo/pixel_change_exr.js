img = new SimpleImage('chapel.png');
print(img)

function turnRed(img){
    for (var pixel of img.values()){
        pixel.setRed(255);
    }
    return img
}

function removeAllRed(img){
    for (var pixel of img.values()){
        pixel.setRed(0);
    }
    return img
}

print(turnRed(img))
print(removeAllRed(img))

img2 = new SimpleImage('eastereggs.jpg');
print(img2)
function stainRedTo70(img){
    for (var pixel of img.values()){
        if (pixel.getRed() > 70){
            pixel.setRed(70);
        }
    }
    return img;
}
print(stainRedTo70(img2));

function setBottomBlack(img, height){
    for (var pixel of img.values()){
        if (pixel.getY() >= height){
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
    }
    return img
}

img3 = new SimpleImage('astrachan.jpg');
print(setBottomBlack(img3, img3.getHeight()));

function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()){
        pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);
        
        
        if (pixel.getRed() == 255){
            red = 0;
        }
        if (pixel.getRed() != 255){
            red = red + 1;
        }
    }
    return picture;
}

print(changeRed(256, 256))

//Programming Exercise: Modifying Images part #1
img = new SimpleImage('hilton.jpg');
print(img);
width = img.getWidth();
for (var pixel of img.values()){
    if (pixel.getX() < (width/3)){
        pixel.setRed(255);
    }
    if (pixel.getX() < (2*width/3) & pixel.getX() > (width/3)){
        pixel.setGreen(255);
    }
    if (pixel.getX() > (2*width/3)){
        pixel.setBlue(255);
    }
}

print(img)

//Part #2 ... drew looks like shrek

img = new SimpleImage('drewRobert.png');
print(img);
function swapRedGreen(img){
    for (var pixel of img.values()){
        red = pixel.getRed();
        green = pixel.getGreen();
        pixel.setRed(green);
        pixel.setGreen(red);
    }
    return img
}
print(swapRedGreen(img))

//Part #3
var img = new SimpleImage('drewRobert.png');
print(img);
function swapBlueYellow(img){
    for (var pixel of img.values()){
        if (pixel.getRed() != 0 & pixel.getGreen() != 0 & pixel.getBlue() != 0){
            continue
        }
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
    return img
}
print(swapBlueYellow(img))

//Programming Exercise: Advanced Modifying Images
//Part #1(from green_screen_Algorithm import GSA)
//Part #2
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else if ((x > img.getWidth()/2) & (y < img.getHeight())){
    px.setGreen(255);
  }
}
print (img);
//Part #3
var img = new SimpleImage('palm-and-beach.png');
function makeBorder(img, thickness){
    var w = img.getWidth();
    var h = img.getHeight();
    for (var pixel of img.values()){
        if (pixel.getX() <= thickness || pixel.getX()> w - thickness 
        || pixel.getY() < thickness || pixel.getY() > h - thickness){
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        continue;
    }
}
makeBorder(img, 20)
print(img)
