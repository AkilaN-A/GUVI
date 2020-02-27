var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1' 
var imgs = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png"]; 
var img = document.createElement('img');
div.appendChild(img);
var i=0
img.src =imgs[0];
img.id='img1'
document.getElementById("img1").onmouseover = function(){mouseOver()};
function mouseOver() {
i=i+1;
i=i%imgs.length;
document.getElementById("img1").src =imgs[i];
}