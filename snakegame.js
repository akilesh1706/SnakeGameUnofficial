// Game Constants & Variables
let inputDir = { x: 0, y: 0 };
let speed = 9;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
];
let board = document.getElementById('board');

let food = { x: 3, y: 7 };
let food1 = { x: 14, y: 12 };
let food2 = { x:9, y: 19};

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >= 20 || snake[0].y <= 0) {
        return true;
    }

    return false;
}

let q = setInterval(timing,1000);
let t = 60;
function timing(){
    document.getElementById('time').innerHTML = 'Time:' + t;
    t--;
    if(t==0){
        clearInterval(q);
        alert("Time Over!");
    }
}

function gameEngine() {

    // for(let i = 1;i<=60;i++){
    //     document.getElementsByClassName("time").innerHTML = i;
    // }

    // Part 1: Updating the snake array & Food
    if (isCollide(snakeArr)) {
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to play again!");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
        // if(score>hiscoreval){
        //     hiscoreval = score;
        //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
        //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        // }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        document.getElementsByTagName('div').classList.remove('food');
        
    }
    if (snakeArr[0].y === food1.y && snakeArr[0].x === food1.x) {
        score += 1;
        // if(score>hiscoreval){
        //     hiscoreval = score;
        //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
        //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        // }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        
    }
    if (snakeArr[0].y === food2.y && snakeArr[0].x === food2.x) {
        score += 1;
        // if(score>hiscoreval){
        //     hiscoreval = score;
        //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
        //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        // }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 18;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        food1 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        food2 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }
    


    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

    foodElement1 = document.createElement('div');
    foodElement1.style.gridRowStart = food1.y;
    foodElement1.style.gridColumnStart = food1.x;
    foodElement1.classList.add('food1');
    board.appendChild(foodElement1);

    foodElement2 = document.createElement('div');
    foodElement2.style.gridRowStart = food2.y;
    foodElement2.style.gridColumnStart = food2.x;
    foodElement2.classList.add('food2');
    board.appendChild(foodElement2);

}



// let hiscore = localStorage.getItem("hiscore");
// if(hiscore === null){
//     hiscoreval = 0;
//     localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
// }
// else{
//     hiscoreval = JSON.parse(hiscore);
//     hiscoreBox.innerHTML = "HiScore: " + hiscore;
// }

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // Start the game
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})

function upfunction(){
    console.log("ArrowUp");
    inputDir.x = 0;
    inputDir.y = -1;
}
function leftfunction(){
    console.log("ArrowLeft");
    inputDir.x = -1;
    inputDir.y = 0;
}
function rightfunction(){
    console.log("ArrowRight");
    inputDir.x = 1;
    inputDir.y = 0;
}
function downfunction(){
    console.log("ArrowDown");
    inputDir.x = 0;
    inputDir.y = 1;
}

