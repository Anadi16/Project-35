//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var dogImage,happyDogImage;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

    database = firebase.database();
    console.log(database);
  
   dog = createSprite(200,300,10,10);
   dog.addImage(dogImage);
   dog.scale = 0.3;

   foodStock = database.ref('Food');
   foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here
  fill("white");
  text("NOTE - Press UP_ARROW Key to feed the dog",100,50);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }



}
function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


