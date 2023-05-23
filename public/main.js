const socket = io("localhost:3000");

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}