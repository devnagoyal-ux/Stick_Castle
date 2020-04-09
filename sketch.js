var rectangle1;
var rectangle2;
var triangle1,triangle2, triangle3;
var rectangle3;
var rectangle4;
var square1 ,square2,square3,square4 , square5,square6;
var window1,window2,window3;
var gate;

function setup() {
createCanvas(800,800);
fill('red');
rectangle1 = rect(50,100,100,550);
rectangle2 = rect(650,100,100,550);
fill('orange');
rectangle3  = rect(310,100,180,320);

fill('pink');

  triangle1 = triangle(30, 125, 100, 10, 170, 125);
  triangle2 = triangle(630, 125, 700, 10, 770, 125);
  triangle3 = triangle(280,110,400,10,520,110);

fill('yellow');
 rectangle4 = rect(150,410,500,240);

 fill('lightBlue');
 square1 = square(160,380,30);
 square2 = square(210,380,30);
 square3 = square(260,380,30);
 square4 = square(500,380,30);
 square5 = square(550,380,30);
 square6 = square(600,380,30);

window1 = square(75,150,50);
window2 = square(675,150,50);
window3 = square(360,200,80);

fill('brown')
 gate = rect(350,500,100,150);





  

}

function draw() {
  //background(255,255,255); 
 
drawSprites();




}

