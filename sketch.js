//Create variables here
var food
function preload()
{
	//load images here
  dogHappy=loadImage("images/dogImg1.png")
  dogSad=loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  database.ref('food').on("value", readPosition)

  dog= createSprite(700,400,50,50)
  dog.addImage(dogSad)
  dog.scale=0.2

  milk1=new Food()
  milk1.getfeedTime()
}


function draw() {  
background(0)
  drawSprites();
  //add styles here
 text("feedtime:   "+milk1.feedtime, 200,50) 
if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.2 
}

milk1.buttons()
milk1.milkImg() 
}

function readPosition(data){

  food= data.val()
}

function writeStock(data){
  database.ref('/').set({
    food:data,
    feedtime:hour()
  })
}
