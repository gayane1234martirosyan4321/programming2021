class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 1;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ]

    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}




class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 2;
        this.energy = 10;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 3;
        this.energy = 10;
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
        this.getNewDirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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

class Kerpar1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 4;
        this.energy = 15;
        
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
        this.getNewDirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 18) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4
            var ker1 = new Kerpar1(x, y, 4);
            kerpar1Arr.push(ker1)
            this.energy = 15;
        }
       
    }
    move() {
        var empty = random(this.chooseCell(0))

        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
        this.energy--
    }
    eat() {
        var food1 = this.chooseCell(1);
        var food2 = this.chooseCell(3);
        var food = food1.concat(food2);
        var uteliq = random(food)

        if (uteliq) {
            var x = uteliq[0]
            var y = uteliq[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
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
            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == this.x && kerpar1Arr[i].y == this.y) {
                    kerpar1Arr.splice(i, 1)
                }
            }
        }
    }
}




class Kerpar2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        this.getNewDirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0))
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
        var empty = random(this.chooseCell(0))

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
        var uteliq = random(food)

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




