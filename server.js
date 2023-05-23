// requires
const utils = require("./serverbase/utils.js");

// server init
const io = utils.setupServer(3000);

// events
io.on("connection", mainSocketBehavior);

// functions
function mainSocketBehavior(socket) {
    console.log("new connection: " + socket.id);
}