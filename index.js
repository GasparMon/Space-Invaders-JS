const cavans = document.getElementById("game");
const cxt = cavans.getContext("2d");

cavans.width = 600;
cavans.height = 600;

const fondo = new Image();

fondo.src = "images/space.png"



// GameStart

let gameOvers = false;

//Crear Jugador//

const jugador = new Image();

jugador.src = "images/player.png";

const player = {
  x: 300,
  y: 530,
  width: 50,
  height: 50,
  velocidad: 50,
};

function crearPlayer() {
  cxt.drawImage(jugador, player.x, player.y, player.width, player.height);
}

//Movimiento Jugador //

function movimientoPlayer() {
  switch (event.key) {
    case "ArrowRight":
      player.x += player.velocidad;
      break;
    case "ArrowLeft":
      player.x -= player.velocidad;
      break;
  }
}

document.addEventListener("keydown", movimientoPlayer);

///Crear Disparo ////

const mapDisparo = [];

function disparar() {
  const disparo = {
    x: player.x + 4,
    y: player.y,
    width: 40,
    height: 40,
    speed: 10,
  };

  mapDisparo.push(disparo);
}

function recorrerDisparo() {
  mapDisparo.forEach((shoot, index) => {
    shoot.y -= shoot.speed;

    if (shoot.y + shoot.height < 0) {
      mapDisparo.splice(index, 1);
    }
  });
}

function crearDisparo() {
  mapDisparo.forEach((shoot) => {
    const shooter = new Image();
    shooter.src = "images/rocket-laser-beam-pixel-art-maker-229033.png";

    cxt.drawImage(shooter, shoot.x, shoot.y, shoot.width, shoot.height);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    disparar();
  }
});

//Crear Enemeigos //

const enemigos = [
  { x: 50, y: 50, width: 30, height: 30, id: 1 },
  { x: 100, y: 50, width: 30, height: 30, id: 2 },
  { x: 150, y: 50, width: 30, height: 30, id: 3 },
  { x: 200, y: 50, width: 30, height: 30, id: 1 },
  { x: 250, y: 50, width: 30, height: 30, id: 2 },
  { x: 300, y: 50, width: 30, height: 30, id: 3 },
  { x: 350, y: 50, width: 30, height: 30, id: 1 },
  { x: 400, y: 50, width: 30, height: 30, id: 2 },
  { x: 450, y: 50, width: 30, height: 30, id: 3 },
  { x: 500, y: 50, width: 30, height: 30, id: 3 },
  { x: 50, y: 100, width: 30, height: 30, id: 1 },
  { x: 100, y: 100, width: 30, height: 30, id: 2 },
  { x: 150, y: 100, width: 30, height: 30, id: 3 },
  { x: 200, y: 100, width: 30, height: 30, id: 1 },
  { x: 250, y: 100, width: 30, height: 30, id: 2 },
  { x: 300, y: 100, width: 30, height: 30, id: 3 },
  { x: 350, y: 100, width: 30, height: 30, id: 1 },
  { x: 400, y: 100, width: 30, height: 30, id: 2 },
  { x: 450, y: 100, width: 30, height: 30, id: 3 },
  { x: 500, y: 100, width: 30, height: 30, id: 3 },
  { x: 50, y: 150, width: 30, height: 30, id: 1 },
  { x: 100, y: 150, width: 30, height: 30, id: 2 },
  { x: 150, y: 150, width: 30, height: 30, id: 3 },
  { x: 200, y: 150, width: 30, height: 30, id: 1 },
  { x: 250, y: 150, width: 30, height: 30, id: 2 },
  { x: 300, y: 150, width: 30, height: 30, id: 3 },
  { x: 350, y: 150, width: 30, height: 30, id: 1 },
  { x: 400, y: 150, width: 30, height: 30, id: 2 },
  { x: 450, y: 150, width: 30, height: 30, id: 3 },
  { x: 500, y: 150, width: 30, height: 30, id: 3 },
  { x: 50, y: 200, width: 30, height: 30, id: 1 },
  { x: 100, y: 200, width: 30, height: 30, id: 2 },
  { x: 150, y: 200, width: 30, height: 30, id: 3 },
  { x: 200, y: 200, width: 30, height: 30, id: 1 },
  { x: 250, y: 200, width: 30, height: 30, id: 2 },
  { x: 300, y: 200, width: 30, height: 30, id: 3 },
  { x: 350, y: 200, width: 30, height: 30, id: 1 },
  { x: 400, y: 200, width: 30, height: 30, id: 2 },
  { x: 450, y: 200, width: 30, height: 30, id: 3 },
  { x: 500, y: 200, width: 30, height: 30, id: 3 },
  { x: 50, y: 0, width: 30, height: 30, id: 1 },
  { x: 100, y: 0, width: 30, height: 30, id: 2 },
  { x: 150, y: 0, width: 30, height: 30, id: 3 },
  { x: 200, y: 0, width: 30, height: 30, id: 1 },
  { x: 250, y: 0, width: 30, height: 30, id: 2 },
  { x: 300, y: 0, width: 30, height: 30, id: 3 },
  { x: 350, y: 0, width: 30, height: 30, id: 1 },
  { x: 400, y: 0, width: 30, height: 30, id: 2 },
  { x: 450, y: 0, width: 30, height: 30, id: 3 },
  { x: 500, y: 0, width: 30, height: 30, id: 3 },
];

function crearEnemigos() {
  enemigos.forEach((enemies) => {
    //const numeroAleatorio = Math.floor(Math.random() * 3) + 1;

    const enemy = new Image();

    enemy.src = `images/enemy${enemies.id}.png`;

    cxt.drawImage(
      enemy,
      enemies.x,
      enemies.y,
      enemies.width + 5,
      enemies.width + 5
    );
  });
}

//// Movimiento Enemigos ///

enemigos.forEach((elemento) => {

    elemento.direccionX = 1;
})

function movimientoEnemigos(){

    enemigos.forEach((aliens) => {

        var velocidad = 1;

        aliens.x += velocidad * aliens.direccionX;

        if(aliens.x + aliens.width > cavans.width || aliens.x < 0){

            enemigos.forEach((el) => {

                el.direccionX *= -1;
                el.y += 15;

                if(el.y + el.height >= player.y && el.y <= player.y + player.height){

                    gameOvers = true;
                    gameOver();
                }
            })
        }
    })
}

/// Eliminar Enemigos ///

function eliminar() {
  mapDisparo.forEach((d, ind) => {
    enemigos.forEach((e, indx) => {
      if (
        d.x < e.x + e.width &&
        d.x + d.width > e.x &&
        d.y < e.y + e.height &&
        d.y + d.height > e.y
      ) {
        mapDisparo.splice(ind, 1);
        enemigos.splice(indx, 1);
      }
    });
  });
}

//GameOver

function gameOver(){

    cxt.drawImage(fondo, 0, 0, cavans.width, cavans.height)

    cxt.font = "100px Pixelify Sans";
    cxt.fillStyle = "white";
    cxt.fillText("Game Over", 50, 300)
   
}

function draw() {
 if(!gameOvers){
    
    cxt.drawImage(fondo, 0, 0, cavans.width, cavans.height);

    crearPlayer();
    crearEnemigos();
    crearDisparo();
    recorrerDisparo();
    eliminar();
    movimientoEnemigos();
  
    //movimiento player //
  
    if (player.x + player.width > cavans.width) {
      player.x = cavans.width - player.width;
    } else if (player.x < 0) {
      player.x = 0;
    }
  
    requestAnimationFrame(draw);
 }
}

requestAnimationFrame(draw);
