function Tile(x, y){
    this.pos = new WorldPos(x, y);
    this.style = "#FF" + Math.floor(Math.random() * 10);
}

Tile.prototype.render = function(ctx){
    Renderer.drawRect(ctx, this.pos, this.style);
};