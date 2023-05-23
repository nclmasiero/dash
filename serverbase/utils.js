function setupServer(port) {
    var express = require("express");
    var app = express();
    app.use(express.static("public"));
    var server = app.listen(port, () => {
        console.log("listening on " + port);
    });

    var io = require("socket.io")(server);

    return io;
}

module.exports = {
    setupServer: setupServer
};