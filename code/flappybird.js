// board object
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// bird object
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
};

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

window.onload = function() {
    // get canvas and context
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    // draw bird (temporary, before image loads)
    /*context.fillStyle = "green";
    context.fillRect(bird.x, bird.y, bird.width, bird.height);*/

    // load image
    birdImg = new Image();
    birdImg.src = "/Users/perlydahan/Desktop/coding projects /flappybird/image/flappybird-2.png";  // Use relative path

    birdImg.onload = function() {
        // Draw the bird when the image is loaded
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    };

    topPipeImg = new Image();
    topPipeImg.src = "/Users/perlydahan/Desktop/coding projects /flappybird/image/toppipe-2.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "/Users/perlydahan/Desktop/coding projects /flappybird/image/bottompipe.png"

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); //every 1.5 seconds 
};

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //bird
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    //pipes
    for(let i =0; i<pipeArray.length, i++){
        let pipe = pipeArray[i];
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe,height)
    }
}

function placePipes(){
    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : pipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false //has the birs passed th epipe 
    }
    pipeArray.push(topPipe);
}

