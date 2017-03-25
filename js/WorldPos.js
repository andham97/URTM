function WorldPos(x, y){
    this.x = x * Game.tileSize;
    this.y = y * Game.tileSize;
}

WorldPos.prototype.getX = function(){
    return this.x / Game.tileSize;
};

WorldPos.prototype.getY = function(){
    return this.Y / Game.tileSize;
};

WorldPos.prototype.getRealX = function(){
    return this.x;
};

WorldPos.prototype.getRealY = function(){
    return this.y;
};