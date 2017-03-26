function GameManager(){
    this.world = new World();
    while(!this.world.valid){
        this.world = new World();
    }
}

GameManager.prototype.tick = function(){

};

GameManager.prototype.render = function(ctx){
    this.world.render(ctx);
};

