let LivingCreature = require('./LivingCreature')



module.exports = class Kerpar2 extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.index = 5;
        this.energy = 10;
        
    }
    getNewDirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1]
        ];

    }

    chooseCell(character) {
        this.getNewDirection();
        return super.chooseCell(character);
    }
    mult() {
        var empty = getRandomArrayElement(this.chooseCell(0))
        if (empty && this.energy > 14) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 5
            var ker2 = new Kerpar2(x, y, 5);
            kerpar2Arr.push(ker2)
            this.energy = 10;
        }

    }
    move() {
        var empty = getRandomArrayElement(this.chooseCell(0))

        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
        this.energy--
    }
    eat() {
        var food1 = this.chooseCell(4);
        var food2 = this.chooseCell(3);
        var food = food1.concat(food2);
        var uteliq = getRandomArrayElement(food)

        if (uteliq) {
            var x = uteliq[0]
            var y = uteliq[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0

            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == x && kerpar1Arr[i].y == y) {
                    kerpar1Arr.splice(i, 1)
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy += 3
        }

    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in kerpar2Arr) {
                if (kerpar2Arr[i].x == this.x && kerpar2Arr[i].y == this.y) {
                    kerpar2Arr.splice(i, 1)
                }
            }
        }
    }
}




