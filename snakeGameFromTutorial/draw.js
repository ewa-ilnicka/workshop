const canvas = document.querySelector(".canvas");
//console.log(canvas);
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();

    window.setInternal(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
    }, 250);
})