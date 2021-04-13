var canvas = document.getElementById("game");
ctx = canvas.getContext("2d");

let direction = "right";
let positions = [[10, 10]];
let tailLength = 0;
let maxLength = 10;
let lost = false;
let new_food = true;
let eaten = 0;

let x = 10;
let y = 10;

function arrows(event) {
    var x = event.key;
    if (x == "ArrowDown") {
        direction = "down";
    }
    else if (x == "ArrowRight") {
        direction = "right";
    }
    else if (x == "ArrowLeft") {
        direction = "left";
    }
    else if (x == "ArrowUp") {
        direction = "up";
    }
}

function last(a) {
    return a[a.length - 1];
}

function checker(check) {
    let checked = [];

    for (i = 0; i < check.length; i++) {
        let val = ["[", check[i], "]"].join();
        if (JSON.stringify(checked).includes(val)) {
            console.log("lost");
            clearInterval(game);
            ctx.font = "30px Arial"
            ctx.fillText("Game Over!", 180, 300);
            ctx.fill();
        }
        checked.push(val);
    }
    lost = false;
}

function drawsnake(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.rect(x, y, 10, 10);
    ctx.fill();
}

function move() {
    checker(positions);
    if (direction == "right") {
        x = x + 10;
    }
    else if (direction == "down") {
        y = y + 10;
    }
    else if (direction == "left") {
        x = x - 10;
    }
    else if (direction == "up") {
        y = y - 10;
    }
    tailLength++;
    positions.push([x, y]);
    drawsnake(x, y);
    wrap(x, y);
}

function wrap(posx, posy) {
    if (posx < 0) {
        x = 512;
    }
    else if (posx > 512) {
        x = 0;
    }
    if (posy < 0) {
        y = 342;
    }
    else if (posy > 342) {
        y = 0;
    }
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function food() {
    if (new_food == true) {
        posx = rand(1, 51) * 10;
        posy = rand(1, 34) * 10;
        console.log(posx, posy);
        new_food = false;
    }

    ctx.rect(posx, posy, 10, 10);
    ctx.fill();
    pos = JSON.stringify([posx, posy]);

    if (JSON.stringify(last(positions)) == pos) {
        maxLength = maxLength + 5;
        eaten++;
        console.log(eaten);
        new_food = true;
    }
}

function tail() {
    if (tailLength == maxLength) {
        ctx.clearRect(positions[0][0], positions[0][1], 10, 10);
        positions.splice(0, 1);
        tailLength = tailLength - 1;
    }
}

function moving() {
    food(130, 10);
    tail();
    move(x, y);
}

var game = setInterval(moving, 100);
