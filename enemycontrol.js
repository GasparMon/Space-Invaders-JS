import Enemy from "./enemy.js";
import moveDirection from "./enemiesMove.js";

export default class EnemyMoves {
  enemiesForm = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
    [1, 1, 2, 3, 3, 3, 3, 2, 1, 1],
    [1, 1, 1, 2, 3, 3, 2, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  enemiesLines = [];

  currentDirection = moveDirection.rigth;
  xSpeed = 0;
  ySpeed = 0;
  defxSpeed = 1;
  defySpeed = 1;
  moveDownDef = 30;
  moveTimer = this.moveDownDef;

  constructor(canvas) {
    this.canvas = canvas;
    this.newEnemies();
  }

  draw(ctx) {
    this.speed_direction();
    this.drawEnemies(ctx);
  }

  speed_direction() {
    for (const enemiesLines of this.enemiesLines) {
      if (this.currentDirection === moveDirection.rigth) {
        this.xSpeed = this.defxSpeed;
        this.ySpeed = 0;
        const rigthMoveEnemy = enemiesLines[enemiesLines.length - 1]

        if(rigthMoveEnemy.x + rigthMoveEnemy.width >= this.canvas.width){
            this.currentDirection = moveDirection.downLeft;
            break;
        }
      }
      else if(this.currentDirection === moveDirection.downLeft){
        this.xSpeed = 0;
        this.ySpeed = this.defySpeed;
        if(this.moveDownDef(moveDirection.left)){
            break;
        }
      }
    }
  }

  drawEnemies(ctx) {
    this.enemiesLines.flat().forEach((enemy) => {
      enemy.move(this.xSpeed, this.ySpeed);

      enemy.draw(ctx);
    });
  }

  newEnemies() {
    this.enemiesForm.forEach((element, index) => {
      this.enemiesLines[index] = [];
      element.forEach((enemyNum, enemyIndex) => {
        if (enemyNum > 0) {
          this.enemiesLines[index].push(
            new Enemy(enemyIndex * 50, index * 35, enemyNum)
          );
        }
      });
    });
  }
}
