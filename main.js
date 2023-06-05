function preload(){

}
function setup(){
    canvas = createCanvas(683,492)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,683,492)
    ellipseMode(CORNER);
fill(255);
ellipse(25, 25, 50, 50);
ellipseMode(CORNERS);
fill(92,46,15)
ellipse(25, 25, 50, 50);
fill(25,93,49)
square(243, 118, 55, 20);
describe(
  'white square with black outline and round edges in mid-right of canvas'
);
}
function takeSnapshot(){
    save("0-0-0 dart monkey.png")
}
function changeFilter(){
     tintColor = document.getElementById("nome_de_el_cor").value
}