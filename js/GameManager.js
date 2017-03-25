function GameManager(){
    this.tiles = [];
    for(var x = 0; x < Game.width / Game.tileSize; x++){
        this.tiles[x] = [];
        for(var y = 0; y < Game.width / Game.tileSize; y++) {
            this.tiles[x].push(new Tile(x, y));
        }
    }
}

GameManager.prototype.tick = function(){

};

GameManager.prototype.render = function(ctx){
    for(var x = 0; x < Game.width / Game.tileSize; x++){
        for(var y = 0; y < Game.width / Game.tileSize; y++) {
            this.tiles[x][y].render(ctx);
        }
    }
};

