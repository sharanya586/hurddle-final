class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null ;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(playerCount){
    database.ref('/').update({
      playerCount: playerCount
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getplayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getplayerRank(){
    database.ref('playerRank').on("value",(data)=>{
        this.rank=data.val();
    })
}

static updatePlayerRank(rank){
    database.ref('/').update({'playerRank' : rank })
}

}