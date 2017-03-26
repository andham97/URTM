/**
 * Created by Truls on 25.03.2017.
 */
function Monster() {
    this.pos = new WorldPos(0, 0);
    this.alive = true;
    this.portalsMade = 0;
}

Monster.prototype.move = function (x, y) {
    this.pos = new WorldPos(x, y)
};

Monster.prototype.makePortal = function () {
    if(this.portalsMade < 2) {
        return false;
    }
    this.portalsMade++;
    return true;
};

Monster.prototype.kill = function () {
    this.alive = false;
};