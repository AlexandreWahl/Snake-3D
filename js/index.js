init();
animate();

var number = getNumber();

var candy = new Candy("red", number);
candy.create();

var snake = new Snake("blue", "green", number);
snake.create();

var moove = setInterval(function() {
    if(!snake.moove()) {
        clearInterval(moove);
    };
}, snake.getSpeed());

$(window).keypress(function(e) {
    if(e.which == 115) { // S
        if(snake.getAxe != "z") {
            snake.setAxe("z");
            snake.setDirection(-1);
        }
    } else if(e.which == 119) { // W
        if(snake.getAxe != "z") {
            snake.setAxe("z");
            snake.setDirection(1);
        }
    } else if(e.which == 100) { // D
        if(snake.getAxe != "x") {
            snake.setAxe("x");
            snake.setDirection(-1);
        }
    } else if(e.which == 97) { // A
        if(snake.getAxe != "x") {
            snake.setAxe("x");
            snake.setDirection(1);
        }
    } else if(e.which == 117) { // U
        if(snake.getAxe != "y") {
            snake.setAxe("y");
            snake.setDirection(-1);
        }
    } else if(e.which == 104) { // H
        if(snake.getAxe != "y") {
            snake.setAxe("y");
            snake.setDirection(1);
        }
    }
});