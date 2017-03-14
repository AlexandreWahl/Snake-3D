function Candy(color, cubeSize) {
    this.pos = {
        x : 0,
        y : 0,
        z : 0
    };
    this.color = color;
    this.cubeSize = cubeSize;

    this.create = function () {
        this.pos.x = Math.floor((Math.random() * this.cubeSize) + 1) -1;
        this.pos.y = Math.floor((Math.random() * this.cubeSize) + 1) -1;
        this.pos.z = Math.floor((Math.random() * this.cubeSize) + 1) -1;

        setLedColor(this.pos.x, this.pos.y, this.pos.z, this.color);
    };
}
