// requires
const utils = require("./serverbase/utils.js");
const Room = require("./serverbase/room.js");
const Player = require("./serverbase/player.js");

// server init
const io = utils.setupServer(3000);

// events
io.on("connection", mainSocketBehavior);

// code
var rooms = [];

setInterval(() => {
    for (let room of rooms) {
        room.update();

        io.to(room.id).emit("update", (room.entities));
    }
}, 16);

function mainSocketBehavior(socket) {
    console.log("new connection: " + socket.id);

    let freeRoom = getFreeRoom();
    if (freeRoom == null) { // there's no free room, creating one
        let roomId = socket.id + "_room";
        createRoom(roomId);
        addPlayer(socket.id, getRoomById(roomId));

        socket.join(roomId);
    } else {
        addPlayer(socket.id, freeRoom);
        socket.join(freeRoom.id);
    }
}

// functions

function getFreeRoom() {
    for (let room of rooms) {
        if (room.isThereSpace()) return room;
    }
}

function createRoom(id) {
    rooms.push(new Room(id));
}

function getRoomById(id) {
    for (let room of rooms) {
        if (room.id == id) return room;
    }
    return null;
}

function addPlayer(id, room) {
    room.addEntity(new Player(id));
}