/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width=500;
CANVAS_HEIGHT = canvas.height=700;
const numberOfEnemies = 100;
const enemiesArray = [];

const enemyImage = new Image();
enemyImage.src = 'assests/enemy1.png';
 
class Enemy{
    constructor(){
        this.x = Math.random()* canvas.width;
        this.y = Math.random()* canvas.height;
        this.speed = Math.random()*4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth/3;
        this.height= this.spriteHeight/3;
    }
    update(){
        this.x+= this.speed;
        this.y+= this.speed;
    }
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(enemyImage,0,0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

//const enemy1 = new Enemy();

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy);
}

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate);
}
animate();
