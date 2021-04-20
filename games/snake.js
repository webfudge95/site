/*
Snake Game
By Daniel Barrass
*/

var canvas = document.getElementById("game");
ctx = canvas.getContext("2d");

// Initial Variables
let direction = "right";
let positions = [];
let tailLength = 0;
let maxLength = 10;
let lost = false;
let new_food = true;
let eaten = 0;
var level = 1;
let increase = true;
let paused = false;
let changed = false;
let change = 8;

// Initial Position
let x = 200;
let y = 110;

// Initial Drawing

function divider() {
    ctx.beginPath();
    ctx.moveTo(411, 0)
    ctx.lineTo(411, 342);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

ctx.font = "16px Connection II";
ctx.fillText("score", 440, 65);
draw_score(eaten);

function draw_grid() {
    for (i = 0; i < 342; i++) {
        if ((i % 10) == 0) {
            ctx.strokeStyle = "#999";
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(411, i);
            ctx.stroke();
        }
    }
    for (i = 0; i < 411; i++) {
        if ((i % 10) == 0) {
            ctx.strokeStyle = "#999";
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 342);
            ctx.stroke();
        }
    }
}

// Core Functions
function score(num) {
    numlen = num.toString().length;
    return ('0'.repeat(6 - numlen) + num);
}

function draw_score(s) {
    var level = Math.floor((eaten / change) + 1);
    ctx.clearRect(435, 70, 140, 50);
    ctx.fillText(score(s), 440, 85);
    if (level < 4) {
        ctx.fillText(`level ${level}`, 440, 110);
    }
    else {
        ctx.fillText("level Max", 440, 110);
    }
    ctx.fill();
}

function interval() {
    ctx.clearRect(0, 0, 410, 342);
    tail();
}

function arrows(event) {
    var x = event.key;
    if (x == "ArrowDown" && direction != "up" && changed == false) {
        direction = "down";
        changed = true;
    }
    else if (x == "ArrowRight" && direction != "left" && changed == false) {
        direction = "right";
        changed = true;
    }
    else if (x == "ArrowLeft" && direction != "right" && changed == false) {
        direction = "left";
        changed = true;
    }
    else if (x == "ArrowUp" && direction != "down.." && changed == false) {
        direction = "up";
        changed = true;
    }
    if (x == "p") {
        if (paused == false) {
            paused = true;
        }
        else if (paused == true) {
            paused = false;
        }
    }
}

function last(a) {
    return a[a.length - 1];
}

function gameover() {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.clearRect(170, 302, 150, 40);
    ctx.strokeRect(170, 302, 150, 40);
    ctx.font = "20px Connection II";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fillText("Game Over!", 188, 328);
}

function checker(check) {
    let checked = [];

    for (i = 0; i < check.length; i++) {
        let val = ["[", check[i], "]"].join();
        if (JSON.stringify(checked).includes(val)) {
            clearInterval(game);
            gameover();
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

function increase_level() {
    if ((eaten % change) == 0 && increase == true && eaten < 4) {
        level_change();
        increase = false;
    }
}

function move() {
    checker(positions);
    if (direction == "right") {
        x = x + 10;
        changed = false;
    }
    else if (direction == "down") {
        y = y + 10;
        changed = false;
    }
    else if (direction == "left") {
        x = x - 10;
        changed = false;
    }
    else if (direction == "up") {
        y = y - 10;
        changed = false;
    }
    wrap(x, y);
    tailLength++;
    positions.push([x, y]);
    drawsnake(x, y);
}

function wrap(posx, posy) {
    if (posx < 0) {
        x = 400;
    }
    else if (posx > 400) {
        x = 0;
    }
    if (posy < 0) {
        y = 340;
    }
    else if (posy > 340) {
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
        // New Random position
        posx = rand(1, 41) * 10;
        posy = rand(1, 34) * 10;
        new_food = false;
        
        // Checking position is not used by snake
        var val = `[${posx},${posy}]`;
        while ((JSON.stringify(positions).includes(val)) == true) {
            posx = rand(1, 41) * 10;
            posy = rand(1, 34) * 10;
            var val = `[${posx},${posy}]`;
        }

        // Set increase after 5
        if ((eaten % change) == 0) {
            increase = true;
        }
    }

    ctx.fillStyle = "#000";
    ctx.strokeStyle = "none"
    ctx.rect(posx, posy, 10, 10);
    ctx.fill();
    pos = JSON.stringify([posx, posy]);

    if (JSON.stringify(last(positions)) == pos) {
        maxLength = maxLength + 5;
        eaten++;
        draw_score(eaten);
        new_food = true;
    }
}

function tail() {
    if (tailLength == maxLength) {
        //ctx.clearRect(positions[0][0], positions[0][1], 10, 10);
        positions.splice(0, 1);
        tailLength = tailLength - 1;
    }
    for (i = 0; i < positions.length; i++) {
        ctx.rect(positions[i][0], positions[i][1], 10, 10)
    }
}

function moving() {
    //draw_grid();
    interval();
    if (!paused) {
        food(130, 10);
        tail();
        move(x, y);
        increase_level();
    }
    if (paused) {
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#000";
        ctx.clearRect(170, 302, 150, 40);
        ctx.strokeRect(170, 302, 150, 40);
        ctx.font = "20px Connection II";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#000";
        ctx.fillText("Paused!", 188, 328);
    }
}

function level_change(lv) {
    clearInterval(game);
    game = setInterval(moving, (150 - (eaten * 5)));
}

divider();
game = setInterval(moving, 150)