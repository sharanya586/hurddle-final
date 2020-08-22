class Game {
    constructor(){
  
    }
  
    getState(){
      var toread = database.ref('gameState');
      toread.on("value",function (data) {
          gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        'gameState': state
      });
    }
  
    async start(){

      /* if(gameState === 0){
          form = new Form()
         form.display();
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
         }
        
       }*/
 
       player = new Player();
      
       player.getCount();
     
       form = new Form()
       form.display(); 

      
      p1 = createSprite(50,200,10,10);
      p1.addAnimation("label1",Img)
      p1.scale=0.5;
      p2 = createSprite(50,400,10,10);
      p2.addAnimation("label2",Img)
      p2.scale=0.5;
      p3 = createSprite(50,600,10,10);
      p3.addAnimation("label3",Img)
      p3.scale=0.5;
      p4 = createSprite(50,800,10,10);
      p4.addAnimation("label4",Img)
      p4.scale=0.5;
      ps = [p1, p2, p3, p4];
      hurdle1 = createSprite(650,100,10,50);
      hurdle2 = createSprite(650,300,10,50);
      hurdle3= createSprite(650,500,10,50);
      hurdle4 = createSprite(650,700,10,50);

    //  hurdle5 = createSprite(3350,200,10,100);
      hurdle6 = createSprite(3350,300,10,50);
      hurdle7= createSprite(3350,500,10,50);
      hurdle8 = createSprite(3350,700,10,50);
      hurdles =[ hurdle1, hurdle2, hurdle3, hurdle4, hurdle6, hurdle7, hurdle8]
    }
  
     play(){
   
    player.getplayerRank();
    form.hide();
    Player.getplayerInfo();
    
    if(allPlayers !== undefined){
      background(100);
      image(track,0,0,displayWidth*5,displayHeight);
     
      var index = 0;
      var y = -20 ;
      var x=0;
    

      for(var plr in allPlayers){

        index = index + 1 ;
        y = y + 180;
        x = displayHeight - allPlayers[plr].distance-600;

        if (index<5) {
          ps[index-1].x = x;
          ps[index-1].y = y;
         console.log(index, player.index)  
        
       
      if(keyIsDown(UP_ARROW)){    
        ps[index-1].y-=70;
      }
      
    
      if(ps[index-1].collide(hurdle1)||ps[index-1].collide(hurdle2)||ps[index-1].collide(hurdle3)||
      ps[index-1].collide(hurdle4)||ps[index-1].collide(hurdle6)||ps[index-1].collide(hurdle7)||ps[index-1].collide(hurdle8)){    
           
          player.distance = 0;
          player.update();
        
      }
      
    
  }
        if (plr==="player"+player.index){
          fill("red");
          ps[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
          camera.position.x = ps[index-1].x+500;
        }
        //displayPosition=displayPosition+20;
        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
      }
      }

    }

    if ( keyDown(RIGHT_ARROW) ) {
      player.distance -= 10;
      player.update();
  }

  player.velocityY = -12 ;
  if(keyDown("space") && player.y >= 359&& player.index !== null){
    player.velocityY = player.velocityY + 0.8;
    player.update();
  }

 
  if (player.distance<=-3760) {
      gameState = 2 ;
      player.rank += 1;
      Player.updatePlayerRank(player.rank);
      textSize(40);
      fill("red");
      text("Player rank : " + player.rank,displayWidth/2-50,displayHeight-allPlayers[plr].distance-100);
      console.log(player.rank); 
      console.log("Game Ended");
  }

  drawSprites();

  }
 
}
