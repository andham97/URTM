var Game = {
    width: 640,
    height: 640
};

Game.start = function(){
    var c = document.createElement("canvas");
    c.width = this.width;
    c.height = this.height;

    this.ctx = c.getContext("2d");

    this.mgr = new GameManager();

    this.i = setInterval(function(){Game.tick()}, 1000/60);
};

Game.tick = function(){

    this.render();
};

Game.render = function(){
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.mgr.render(this.ctx);
};

/*
var a = [4];
a.push(1);
a.push([1, 2]);
console.log("");
for(var i = 0; i < 4; i++){

}
if(a < b){

}
function sum(a, b){
    return a + b;
}

var obj = {
    name: "Hei",
    age: 2,
    toString: function(){
        return this.name + this.age;
    }
};

obj.g = 7;

function Portal(){
    this.x = 5;
    this.y = 1;

    this.teleport = function(){

    };
}

Portal.prototype.hei = function(){

};

var b = new Portal();
b.hei();*/