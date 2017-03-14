
var number = 13;

init(number);
animate();

var candy = new Candy("red", number);
candy.create();
candy.draw();

var snake = new Snake("blue", "green", number);
snake.create();

var update = setInterval(function() {
    if(snake.eat()) {
        candy.create();
        candy.draw();
    }
    snake.update();
}, 1000);

$(window).keypress(function(e) {
    if(e.which == 119) { // W
        snake.direction(0, 0, -1);
    } else if(e.which == 115) { // S
        snake.direction(0, 0, 1);
    } else if(e.which == 100) { // D
        snake.direction(1, 0, 0);
    } else if(e.which == 97) { // A
        snake.direction(-1, 0, 0);
    } else if(e.which == 117) { // U
        snake.direction(0, 1, 0);
    } else if(e.which == 104) { // H
        snake.direction(0, -1, 0);
    }
});