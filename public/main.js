const socket = io("localhost:3000");

var entities = [];

socket.on("update", (_entities) => {
    entities = _entities;
});

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);

    for (let entity of entities) {
        if (entity.name == "Player") {
            noStroke();
            fill(255);
            circle(entity.position.x, entity.position.y, entity.radius);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}