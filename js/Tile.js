function Tile(x, y){
    this.pos = new WorldPos(x, y);
    var r = Math.floor(Math.random() * 16);
    if(r < 11)
        this.style = "#FFF";
    else
        this.style = "#000";
}

Tile.prototype.render = function(ctx){
    Renderer.drawRect(ctx, this.pos, this.style);
};

Tile.prototype.intersectsTile = function(tile){
    return this.pos.intersects(tile.pos);
};