const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width=800;

const ctx = canvas.getContext("2d");
const snake = new Snake(300,300,20,200);
snake.draw(ctx);

animate();

function animate(){
    snake.update();

    canvas.height=window.innerHeight;
    snake.draw(ctx);
    requestAnimationFrame(animate);
}
