/**
 * Created by Truls on 25.03.2017.
 */
function Men() {
    number = 5;
    menWithSwords = null;
    menWithGuns = null;

    if(number % 2 == 0) {
        menWithSwords = this.number / 2;
        menWithGuns =  this.number / 2

    } else {
        menWithSwords = this.number / 2;
        menWithGuns = this.number / 2 + 1;
    }
    this.a = people[number];
    for(i = 0; i < menWithSwords; i++) {
        this.prototype.a.push(menWithSwords);
    }
    this.prototype.a.push(1);
};

Men.prototype.move = function (manNumber, x, y) {
    a[manNumber] = new WorldPos(x, y);
}

Men.prototype.kill = function () {
    Monster.prototype.kill();
}

