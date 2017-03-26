function WorldPos(x, y){
    this.x = x * Game.tileSize;
    this.y = y * Game.tileSize;
}

WorldPos.prototype.getX = function(){
    return this.x / Game.tileSize;
};

WorldPos.prototype.getY = function(){
    return this.y / Game.tileSize;
};

WorldPos.prototype.getRealX = function(){
    return this.x;
};

WorldPos.prototype.getRealY = function(){
    return this.y;
};

WorldPos.prototype.intersects = function(pos){
    if((this.getX() - 1) == pos.getX() && this.getY() == pos.getY())
        return true;
    else if((this.getX() + 1) == pos.getX() && this.getY() == pos.getY())
        return true;
    else if((this.getY() - 1) == pos.getY() && this.getX() == pos.getX())
        return true;
    else if((this.getY() + 1) == pos.getY() && this.getX() == pos.getX())
        return true;
    else
        return false;
    /*
    var xi = (this.getX() - 1) == pos.getX();
    var yi = (this.getY() - 1) == pos.getY();
    if(xi && yi)
        return false;
    else if(xi)
        return true;
    else if(yi)
        return true;
    xi = (this.getX() + 1) == pos.getX();
    yi = (this.getY() + 1) == pos.getY();
    if(xi && yi)
        return false;
    else if(xi)
        return true;
    else if(yi)
        return true;
    return false;*/
};