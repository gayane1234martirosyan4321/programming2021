let LivingCreature = require('./LivingCreature')

module.exports = class Gishatich extends LivingCreature {
    
    getNewDirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.getNewDirection();
        return super.chooseCell(character);
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 14) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            var gch = new Gishatich(x, y, 3);
            gishatichArr.push(gch)
            this.energy = 10;
        }
    }
    move() {
        var empty = random(this.chooseCell(0))

        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y

        }
        this.energy--
    }
    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
                    xotakerArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy += 2
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}
