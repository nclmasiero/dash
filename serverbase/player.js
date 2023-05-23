class Player {
    constructor(id) {
        this.name = "Player";
        this.id = id;

        this.position = {
            x: 200,
            y: 200
        };
        this.radius = 30;
    }

    update() {
        this.position.x += 1;
        if (this.position.x > 400) this.position.x = 200;
    }
}

module.exports = Player;