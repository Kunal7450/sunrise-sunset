const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var sunrise,sunset;
var bgimg;

function preload() {

getBackgroundImg() 
   

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(bgimg)
background(bgimg)
    

    Engine.update(engine);

    


}

async function getBackgroundImg(){
   
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responsejson = await response.json()
 var datetime = responsejson.datetime
 hour = datetime.slice(11,13);
if(hour>06 && hour<12){
    bg = "sunrise.png"
}
else{
    bg = "sunset.png"
}
bgimg = loadImage(bg)

}
