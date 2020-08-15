const frameRate = 20;
const rocketWidth = 100;
const rocketHeight = 100;
const gapBetweenRockets = 30;
const bulletWidth = 10;
const initalMargin = 591;
const bulletDisplacement = 3;
const enemyDisplacement = 5;
const rocketPositions = [];
let mainPlayerArray = [];
let mainPlayer;
let mainPlayerInstance = null;
let gameTimer;
let bulletPool = [];
let enemies = [];
let counter = -initalMargin;
let score = 0;
const $slideContainer = document.querySelector(".slides");
const $slideWindow = document.querySelector(".slide-window");
const $playButton = document.querySelector(".play-button");
const $resetButton = document.querySelector(".reset-button");
const $scoreBoard = document.querySelector(".score");

for(let i = 1; i<= 3; i++){

    let currentValue = (i - 1) * rocketWidth + gapBetweenRockets * i;
    rocketPositions.push(currentValue);
}

class GameBackground{

    static moveBackground(){

        counter++;
        $slideContainer.style.marginTop = counter+"px";
    
        if(counter === 0){
            counter = -initalMargin;
        }

    }
};


class Player{

    // parentElement;
    // mainPlayerElement;
    // currentPositionIndex;

    constructor(parentElement, className, startingPositionIndex){

        this.parentElement = parentElement;
        this.mainPlayerElement = document.createElement("div");
        this.currentPositionIndex = startingPositionIndex;
        this.mainPlayerElement.classList.add(className);
        this.parentElement.appendChild(this.mainPlayerElement);
    }

    // static getPlayer(parentElement, className, startingPositionIndex){

    //     if(mainPlayer === null){
    //         mainPlayer = new Player(parentElement, className, startingPositionIndex)
    //     }
    //     return mainPlayer;
    // }

    // constructor(parentElement, className, startingPositionIndex){

    //     if(!mainPlayerInstance){
    //         console.log("Instance is Null, creating a new instance")
    //         mainPlayerInstance = this;
    //     }

    //     console.log("Assigning values to objects")

    //     this.parentElement = parentElement;
    //     this.mainPlayerElement = document.createElement("div");
    //     console.log(this.mainPlayerElement);
    //     this.currentPositionIndex = startingPositionIndex;
    //     this.mainPlayerElement.classList.add(className);
    //     this.parentElement.appendChild(this.mainPlayerElement);

    //     return mainPlayerInstance;
    // }
    
    positionMainPlayer(){

        this.mainPlayerElementPositionX = rocketPositions[this.currentPositionIndex];
        this.mainPlayerElement.style.left = this.mainPlayerElementPositionX+"px";
    }

    moveRight() {
        
        if(this.currentPositionIndex === 2){
            return;
        }

        this.currentPositionIndex = this.currentPositionIndex + 1;
        this.positionMainPlayer()
    }

    moveLeft() {
        
        if(this.currentPositionIndex === 0){
            return;
        }
        this.currentPositionIndex = this.currentPositionIndex - 1;
        this.positionMainPlayer()
    }
}


class Bullets{

    // parentElement;
    // currentBulletElement;
    // currentPositionIndex;
    // bulletPositionX;
    // bulletPositionY;
    // isActive;

    constructor(parentElement, className){

        this.parentElement = parentElement;
        this.currentBulletElement = document.createElement("div");
        this.currentBulletElement.classList.add(className);
        this.parentElement.appendChild(this.currentBulletElement);
        this.isActive = false;
    }

    positionBullet(rocketPositionIndex){

        this.currentPositionIndex = rocketPositionIndex;
        this.bulletPositionX = rocketPositions[rocketPositionIndex] + rocketWidth / 2 - bulletWidth / 2;
        this.bulletPositionY = rocketHeight + bulletDisplacement;
        this.currentBulletElement.style.left = this.bulletPositionX+"px";
        this.currentBulletElement.style.bottom = this.bulletPositionY+"px";
    }

    setBulletActive(){

        this.isActive = true;
    }

    setBulletInactive(){

        this.isActive = false;
    }

    hideBullet(){

        this.currentBulletElement.style.display = "none";
    }

    displayBullet(){

        this.currentBulletElement.style.display = "block";
    }

    moveBullet(){
        
        this.bulletPositionY = this.bulletPositionY + bulletDisplacement;
        this.currentBulletElement.style.bottom = this.bulletPositionY+"px";   
    }

}

class Enemy{

    // parentElement;
    // currentEnemyElement;
    // currentPositionIndex;
    // enemyPositionX;
    // enemyPositionY;
    // bulletsHitAbsorbed;
    // isActive;

    constructor(parentElement, className){

        this.parentElement = parentElement;
        this.currentEnemyElement = document.createElement("div");
        this.currentEnemyElement.classList.add(className);
        this.parentElement.appendChild(this.currentEnemyElement);
        this.isActive = false;
        this.bulletsHitAbsorbed = 0;
    }

    positionEnemy(positionXIndex){

        this.currentPositionIndex = positionXIndex;
        this.enemyPositionY = - 230
        this.enemyPositionX = rocketPositions[positionXIndex]
        this.currentEnemyElement.style.left = this.enemyPositionX+"px";
        this.currentEnemyElement.style.top = this.enemyPositionY+"px";
    }

    setEnemyActive(){

        this.isActive = true;
    }

    setEnemyInactive(){

        this.isActive = false;
    }

    moveEnemy(){

        this.enemyPositionY = this.enemyPositionY + enemyDisplacement;
        this.currentEnemyElement.style.top = this.enemyPositionY+"px";
    }

    removeEnemy(){

        this.parentElement.removeChild(this.currentEnemyElement);
    }

    checkBulletCollision(){

        for(let i = 0; i < bulletPool.length; i++){

            if(bulletPool[i].currentPositionIndex === this.currentPositionIndex && bulletPool[i].isActive && this.isActive){

                if(bulletPool[i].bulletPositionY + this.enemyPositionY >= 500){

                    this.bulletsHitAbsorbed++;
                    bulletPool[i].setBulletInactive();
                    bulletPool[i].hideBullet();
                }

                if(this.bulletsHitAbsorbed === 5){

                    this.setEnemyInactive();
                    // this.removeEnemy();
                    this.currentEnemyElement.style.display = "none";
                    score = score + 10;
                    updateScoreBoard();
                }
            }

        }
    }

    checkMainPlayerCollision(){

        if(this.currentPositionIndex === mainPlayer.currentPositionIndex && this.isActive){
          
            if(this.enemyPositionY >= 400){

                clearInterval(gameTimer);
                setTimeout(() => {
                    
                    gameOverState();
                    showResetButton();
                }, 1000);
            }
        }

    }
}

function generateNewEnemy(){

    let enemyCSSClass = "enemy";
    let newEnemy = new Enemy($slideWindow, enemyCSSClass);
    let randomPositionXIndex = generateRandomNumber();
    newEnemy.positionEnemy(randomPositionXIndex);
    newEnemy.setEnemyActive();
    enemies.push(newEnemy);
}



function checkForActiveElement(list){

    let firstActiveElement = list.find(function(element){

        return element.isActive;
    })

    return firstActiveElement;
}


function moveBulletsFromPool(){

    for(let i = 0; i < bulletPool.length; i++){

        bulletPool[i].moveBullet();

        if(bulletPool[i].bulletPositionY >= initalMargin){

            bulletPool[i].isActive = false;
        }
    }
}


function moveAllBullets(){
 
    let firstActiveBullet = checkForActiveElement(bulletPool);

    if(firstActiveBullet){
        
        moveBulletsFromPool();
    }
    
}


function generateRandomNumber(){

    return Math.floor(Math.random() * 3)
}


function removeEnemyAndSetInactive(currentEnemy){

    currentEnemy.setEnemyInactive();
    currentEnemy.removeEnemy();
}


function moveEnemiesFromPool(){

    for(let i = 0; i < enemies.length; i++){

        if(enemies[i].isActive){
            
            enemies[i].moveEnemy();
            enemies[i].checkBulletCollision();
            enemies[i].checkMainPlayerCollision();

            // && enemies.length < 1
            if(enemies[i].enemyPositionY === (0 - rocketHeight)){
    
                generateNewEnemy();
            }

            // 30 is the game between the mainPlayer and the bottom margin
            if(enemies[i].enemyPositionY >= (initalMargin - 30)){

                enemies[i].setEnemyInactive();
                enemies[i].removeEnemy();
            }
        }
    }
}


function moveEnemies(){

    let firstActiveEnemy =  checkForActiveElement(enemies);

    if(firstActiveEnemy){

        moveEnemiesFromPool();
    }
}


function runGameLoop(){

    gameTimer = setInterval(function(){
        
        GameBackground.moveBackground();
        moveAllBullets();
        moveEnemies();
    
    }, frameRate)
}

function positionBulletAndSetBulletActive(currentBullet){

    currentBullet.positionBullet(mainPlayer.currentPositionIndex);
    currentBullet.setBulletActive();
    currentBullet.displayBullet();
}



function createMainPlayer(startingPosition){

    console.log("Inside the create main player method");
    let mainPlayerClass = "player-one";
    // mainPlayer = Player.getPlayer($slideWindow, mainPlayerClass, startingPosition)

    // mainPlayerArray.push(new Player($slideWindow, mainPlayerClass, startingPosition));
    mainPlayer = new Player($slideWindow, mainPlayerClass, startingPosition);
    // console.log("Main Player created", mainPlayer)

    // mainPlayer = mainPlayerArray[0];
    mainPlayer.positionMainPlayer();
}


$playButton.addEventListener("click", function(){

    removeMainMenuBackground();
    initializeSliderBackground();
    initializeGame();
})

function removeMainMenuBackground(){

    const $mainMenuBackground = document.querySelector(".main-menu");
    $mainMenuBackground.style.display = "none";
}

function initializeSliderBackground(){

    $slideContainer.style.marginTop = -initalMargin+"px";
    $slideContainer.innerHTML = `
    <img src="./images/background.png">
    <img src="./images/background.png">`
}

function mainGameEventListeners(){

    document.addEventListener("keydown", function(e){

        // Right Arrow = Move Player Right
        if(e.keyCode === 39){
            mainPlayer.moveRight();
        }

        // Left Arrow = Move Player Left
        if(e.keyCode === 37){
            mainPlayer.moveLeft();
        }

        // Space Bar = Fire Bullets 
        if(e.keyCode === 32){

            let bulletsCSSClass = "bullets";
            let firstInactiveBullet = bulletPool.find(function(bullet){

                return !bullet.isActive;
            })

            if(firstInactiveBullet){

                positionBulletAndSetBulletActive(firstInactiveBullet);
            }
            else{
                let newBullet = new Bullets($slideWindow, bulletsCSSClass);
                bulletPool.push(newBullet);

                positionBulletAndSetBulletActive(newBullet);
            }
        }
    })
}

function gameOverState(){

    console.log("Game over state!!");
    removeAllBullets();
    removeAllEnemies();
    removeMainPlayer();
    // showResetButton();
}

function showResetButton(){

    $slideWindow.appendChild($resetButton);
    $resetButton.style.display = "block";
    resetButtonEventListener();
}

function removeMainPlayer(){

    console.log("Remove main player");
    mainPlayer.parentElement.removeChild(mainPlayer.mainPlayerElement);
    // mainPlayer = null;
    // mainPlayer.mainPlayerElement = null;
}

function removeAllEnemies(){

    console.log("Remove all enemies")
    while(enemies.length > 0){

        if(enemies[0].isActive){
            
            enemies[0].currentEnemyElement.parentElement.removeChild(enemies[0].currentEnemyElement);
        }
        enemies.shift();
    }
}

function removeAllBullets(){

    console.log("Removing all bullets")
    while(bulletPool.length > 0){

        bulletPool[0].currentBulletElement.parentElement.removeChild(bulletPool[0].currentBulletElement);
        bulletPool.shift();
    }
}

function resetButtonEventListener(){

    $resetButton.addEventListener("click", function(){

        // removeMainPlayer();
        location.reload();
        setTimeout(() => {
            
            // initializeGame();
        }, 1000);
    })
}

function updateScoreBoard(){

    $scoreBoard.textContent = score;
}

function displayScoreBoard(){

    $scoreBoard.style.display = "block";
    updateScoreBoard();
}

function hideResetButton(){

    $resetButton.style.display = "none";
}


function initializeGame(){


    console.log("Initializing Game");
    hideResetButton();
    // 1 is the starting position, 0 = left, 1 = middle, 2 = right;
    createMainPlayer(1);
    generateNewEnemy();
    displayScoreBoard();
    mainGameEventListeners();
    runGameLoop();
}