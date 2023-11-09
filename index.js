import EnemyMoves from "./enemycontrol.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();

background.src = "images/space.png"

const enemyMoves = new EnemyMoves(canvas);

function game(){

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    enemyMoves.draw(ctx)

}

setInterval(game, 1000/60);