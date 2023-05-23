class Room {
    constructor(id) {
        this.id = id;

        this.entities = [];
    }

    update() {
        for (let entity of this.entities) {
            entity.update();
        }
    }

    addEntity(e) {
        this.entities.push(e);
    }

    isThereSpace() {
        let count = 0;
        for (let e of this.entities) {
            if (e.name == "Player") count++;
            if (count >= 2) return false;
        }

        return true;
    }
}

module.exports = Room;