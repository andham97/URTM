function World(){
    this.tiles = [];
    for(var x = 0; x < Game.width / Game.tileSize; x++){
        this.tiles[x] = [];
        for(var y = 0; y < Game.width / Game.tileSize; y++) {
            this.tiles[x].push(new Tile(x, y));
        }
    }
    for(var x = 0; x < Game.width / Game.tileSize; x++){
        for(var y = 0; y < Game.width / Game.tileSize; y++) {
            if(x == 0 || y == 0 || x == (Game.width / Game.tileSize) - 1 || y == (Game.height / Game.tileSize) - 1)
                this.tiles[x][y].style = "#000";
        }
    }
    this.rooms = [];
    this.rooms.push(new Room());
    for(x = 0; x < Game.width / Game.tileSize; x++){
        for(y = 0; y < Game.width / Game.tileSize; y++) {
            var i = 0;
            if(this.tiles[x][y].style == "#000")
                continue;
            if(this.rooms[i].tiles.length == 0){
                this.rooms[i].addTile(this.tiles[x][y]);
            }
            else {
                var found = false;
                for(i = 0; i < this.rooms.length; i++){
                    if(this.rooms[i].isFit(this.tiles[x][y])){
                        this.rooms[i].addTile(this.tiles[x][y]);
                        found = true;
                        break;
                    }
                }
                if(!found) {
                    var room = new Room();
                    room.addTile(this.tiles[x][y]);
                    this.rooms.push(room);
                }
            }
        }
    }
    var r = [];
    for(i = 0; i < this.rooms.length; i++){
        r.push(this.rooms[i]);
    }
    this.rooms = [];
    var t, k;
    for(i = 0; i < r.length; i++){
        if(r[i].size() > 10){
            this.rooms.push(r[i]);
            r.splice(i, 1);
            i--;
        }
        else {
            t = r[i].tiles;
            for(k = 0; k < t.length; k++){
                t[k].style = "#000";
            }
        }
    }
    r = this.rooms[0];
    var j = 0;
    for(i = 1; i < this.rooms.length; i++){
        if(this.rooms[i].size() > r.size()){
            r = this.rooms[i];
            j = i;
        }
    }
    for(i = 1; i < this.rooms.length; i++){
        t = this.rooms[i].tiles;
        for(k = 0; k < t.length; k++){
            t[k].style = "#000";
        }
    }
    this.valid = r.size() > 180;
}

World.prototype.tick = function(){

};

World.prototype.render = function(ctx){
    for(var x = 0; x < Game.width / Game.tileSize; x++){
        for(var y = 0; y < Game.width / Game.tileSize; y++) {
            this.tiles[x][y].render(ctx);
        }
    }
};

World.prototype.walkable = function(x, y){
    return this.tiles[x][y].style == "#FFF";
};

function a(x, y){
    var found = false;
    var world = Game.mgr.world;
    for(var i = 0; i < world.rooms.length; i++){
        if(world.rooms[i].isFit(world.tiles[x][y])){
            found = true;
            break;
        }
    }
    return found;
}