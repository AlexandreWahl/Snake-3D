function Snake(color, headColor, cubeSize) {
    this.pos = {
        x : 0,
        y : 0,
        z : 0,
        x0 : 0,
        y0 : 0,
        z0 : 0
    };
    this.color = color;
    this.headColor = headColor;
    this.size = 3;
    this.speed = 3;
    this.axes = ["x", "y", "z"];
    this.axe = "";
    this.direction = 1;
    this.cubeSize = cubeSize;
    this.body = [];

    this.create = function () {
        this.pos.x0 = Math.floor((Math.random() * this.cubeSize) + 1) -1;
        this.pos.y0 = Math.floor((Math.random() * this.cubeSize) + 1) -1;
        this.pos.z0 = Math.floor((Math.random() * this.cubeSize) + 1) -1;

        this.axe = this.axes[Math.floor((Math.random() * 2))];

        this.axe = "x";

        switch(this.axe) {
            case "x" :
                if(this.pos.x0 > cubeSize / 2) {
                    this.direction = -1;
                } else if(this.pos.x0 <= cubeSize / 2) {
                    this.direction = 1;
                }

                for (var i = 0; i < this.size; i++) {
                    if(i == 0) {
                        setLedColor(this.pos.x0, this.pos.y0, this.pos.z0, this.headColor);
                        this.body[i] = {
                            x : this.pos.x0,
                            y : this.pos.y0,
                            z : this.pos.z0,
                            color : this.headColor
                        }
                    } else {
                        setLedColor(this.pos.x0 + i*this.direction, this.pos.y0, this.pos.z0, this.color);
                        this.body[i] = {
                            x : this.pos.x0 + i*this.direction,
                            y : this.pos.y0,
                            z : this.pos.z0,
                            color : this.color
                        }
                    }
                }
                break;
            case "y" :
                if(this.y0 > cubeSize / 2) {
                    this.direction = 1;
                } else if(this.y0 <= cubeSize / 2) {
                    this.direction = -1;
                }

                for (var i = 0; i < this.size; i++) {
                    if(i == this.size -1) {
                        setLedColor(this.pos.x0, this.pos.y0 + i*this.direction, this.pos.z0, this.headColor);
                        this.body[i] = {
                            x : this.pos.x0,
                            y : this.pos.y0 + i*this.direction,
                            z : this.pos.z0,
                            color : this.headColor
                        }
                    } else {
                        setLedColor(this.pos.x0, this.pos.y0 + i*this.direction, this.pos.z0, this.color);
                        this.body[i] = {
                            x : this.pos.x0,
                            y : this.pos.y0 + i*this.direction,
                            z : this.pos.z0,
                            color : this.color
                        }
                    }
                }
                break;
            case "z" :
                if(this.z0 > cubeSize / 2) {
                    this.direction = -1;
                } else if(this.z0 <= cubeSize / 2) {
                    this.direction = 1;
                }

                for (var i = 0; i < this.size; i++) {
                    if(i == this.size -1) {
                        setLedColor(this.pos.x0, this.pos.y0, this.pos.z0 + i*this.direction, this.headColor);
                        this.body[i] = {
                            x : this.pos.x0,
                            y : this.pos.y0,
                            z : this.pos.z0 + i*this.direction,
                            color : this.headColor
                        }
                    } else {
                        setLedColor(this.pos.x0, this.pos.y0, this.pos.z0 + i*this.direction, this.color);
                        this.body[i] = {
                            x : this.pos.x0,
                            y : this.pos.y0,
                            z : this.pos.z0 + i*this.direction,
                            color : this.color
                        }
                    }
                }
                break;
            default :
                break;
        }
    };

    this.moove = function() {
        clearAll();

        switch(this.axe) {
            case "x" :
                for (var i = 0; i < this.size; i++) {
                    if(this.body[i].x + this.direction == this.cubeSize) {
                        clearAll();
                        return false;
                    }
                    setLedColor(this.body[i].x + this.direction, this.body[i].y, this.body[i].z, this.body[i].color);
                    this.body[i] = {
                        x : this.body[i].x + this.direction,
                        y : this.body[i].y,
                        z : this.body[i].z,
                        color : this.body[i].color
                    }
                }
                return true;
                break;
            case "y" :
                for (var i = 0; i < this.size; i++) {
                    if(this.body[i].y + this.direction == this.cubeSize) {
                        clearAll();
                        return false;
                    }
                    setLedColor(this.body[i].x, this.body[i].y + this.direction, this.body[i].z, this.body[i].color)
                    this.body[i] = {
                        x : this.body[i].x,
                        y : this.body[i].y + this.direction,
                        z : this.body[i].z,
                        color : this.body[i].color
                    }
                }
                return true;
                break;
            case "z" :
                for (var i = 0; i < this.size; i++) {
                    if(this.body[i].z + this.direction == this.cubeSize) {
                        clearAll();
                        return false;
                    }
                    setLedColor(this.body[i].x, this.body[i].y, this.body[i].z + this.direction, this.body[i].color)
                    this.body[i] = {
                        x : this.body[i].x,
                        y : this.body[i].y,
                        z : this.body[i].z + this.direction,
                        color : this.body[i].color
                    }
                }
                return true;
                break;
            default :
                break;
        }
    };

    this.getSpeed = function() {
        return this.speed * 1000;
    };

    this.getAxe = function() {
        return this.axe;
    };

    this.setAxe = function(axe) {
        this.axe = axe;
    };

    this.setDirection = function(direction) {
        this.direction = direction;
    };
}
