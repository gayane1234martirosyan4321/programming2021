var matrix = [];
matrix = fillMatrix(50, 50)
//console.log(matrix)
function fillMatrix(n, m) {
    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([])
        for (var a = 0; a < m; a++) {

            matrix[i].push(0)
        }
    }
    return matrix
}

for (var a = 0; a < 400; a++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 1
}

for (var b = 0; b < 350; b++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 2
}
for (var c = 0; c < 450; c++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 3
}

for (var d = 0; d < 260; d++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 4
}

for (var e = 0; e < 240; e++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 5
}







var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var kerpar1Arr = [];
var kerpar2Arr = [];

function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] == 1) {
                var gr1 = new Grass(j, i);
                grassArr.push(gr1);
            }
            else if (matrix[i][j] == 2) {
                var xt = new Xotaker(j, i);
                xotakerArr.push(xt);
            }

            else if (matrix[i][j] == 3) {
                var gch = new Gishatich(j, i);
                gishatichArr.push(gch);
            }

            else if (matrix[i][j] == 4) {
                var ker1 = new Kerpar1(j, i);
                kerpar1Arr.push(ker1);
            }
            else if (matrix[i][j] == 5) {
                var ker2 = new Kerpar2(j, i);
                kerpar2Arr.push(ker2);
            }

        }

    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }

            rect(x * side, y * side, side, side);


        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].mult()
        xotakerArr[i].move()
        xotakerArr[i].eat()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }


    for (var i in kerpar1Arr) {
        console.log(i, kerpar1Arr[i].energy)
        kerpar1Arr[i].move()
        kerpar1Arr[i].mult()
        kerpar1Arr[i].eat()
        kerpar1Arr[i].die()
    }
    for (var i in kerpar2Arr) {
        console.log(i, kerpar2Arr[i].energy)
        kerpar2Arr[i].move()
        kerpar2Arr[i].mult()
        kerpar2Arr[i].eat()
        kerpar2Arr[i].die()
    }

}


