function Room(){
    this.tiles = [];
}

Room.prototype.addTile = function(tile){
    this.tiles.push(tile);
};

Room.prototype.size = function(){
    return this.tiles.length;
};

Room.prototype.isFit = function(tile){
    for(var i = 0; i < this.tiles.length; i++){
        if(this.tiles[i].intersectsTile(tile)){
            return true;
        }
    }
    return false;
};