function Snake(color, headColor, cubeSize) {
    this.color = color;
    this.headColor = headColor;
    this.cubeSize = cubeSize;
    this.size = 3;
    this.speed = {
        x : 0,
        y : 0,
        z : 0
    };
    this.axes = ["x", "y", "z"];
    this.body = [];
    this.x = 0;
    this.y = 0;
    this.z = 0;


    this.create = function () {
        var random = Math.floor((Math.random() * 3));
        var axe = this.axes[random];
        this.speed[axe] = Math.random() >= 0.5 ? 1 : -1;

        this.x = Math.floor(cubeSize/2);
        this.y = Math.floor(cubeSize/2);
        this.z = Math.floor(cubeSize/2);

        this.body[0] = {
            x : this.x,
            y : this.y,
            z : this.z,
            color : this.headColor
        };
        setLedColorPos(this.body[0]);

        for (var i = 1; i < this.size; i++) {
            this.body[i] = {
                x : this.x + this.speed.x * i,
                y : this.y + this.speed.y * i,
                z : this.z + this.speed.z * i,
                color : this.color
            };
            setLedColorPos(this.body[i]);
        }
    };

    this.update = function() {
        if(this.size === this.body.length)
            leds[this.body[this.body.length-1].x][this.body[this.body.length-1].y][this.body[this.body.length-1].z].turnOff();

        for (var i = this.body.length-1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
            this.body[i].z = this.body[i - 1].z;
            this.body[i].color = this.color;
            setLedColorPos(this.body[i]);
        }


        this.body[0] = {
            x : this.body[0].x - this.speed.x,
            y : this.body[0].y - this.speed.y,
            z : this.body[0].z - this.speed.z,
            color : this.headColor
        };
        setLedColorPos(this.body[0]);
    };

    this.eat = function() {
        var led = leds[this.body[0].x - this.speed.x][this.body[0].y - this.speed.y][this.body[0].z - this.speed.z];

        if(led.getColor().r == 1 && led.getColor().g == 0 && led.getColor().b == 0) {
            this.size++;
            return true;
        } else {
            return false;
        }
    };

    this.direction = function(x, y, z) {
        this.speed.x = x;
        this.speed.y = y;
        this.speed.z = z;
    };
}
