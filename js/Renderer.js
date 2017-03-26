var Renderer = {
    pos: new WorldPos(0, 0)
};

Renderer.drawRect = function(ctx, pos, style){
    var s = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(pos.x, pos.y, Game.tileSize, Game.tileSize);
    ctx.fillStyle = s;
};