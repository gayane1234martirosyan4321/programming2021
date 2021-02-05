var socket = io();


var side = 20;


function setup() {
    frameRate(3);
    createCanvas(50 * side, 50 * side);
    background('#acacac'); 
}
function nkarel(data) {
    var matrix = data.matrix; 
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
    console.log(matrix);
    

}


    socket.on('send matrix', nkarel);
  


