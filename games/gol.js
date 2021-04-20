/*
Conway's Game of life
By Daniel Barrass
*/

canvas = document.getElementById("game");
ctx = canvas.getContext("2d");

width = 512;
height = 342;

wid = 50;
hgt = 50;
size = 6;

states = new Array(wid * hgt);

function state_generate(chance) {
    state = Math.floor((Math.random() * chance + 1));
    if (state != 1) {
        return 0;
    }
    else {
        return 1;
    }
}

function button(string, x, y) {
    ctx.beginPath();
    ctx.rect(x + 5, y + 5, 120, 30);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(x, y, 120, 30);
    ctx.fillStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.strokeRect(x, y, 120, 30);

    ctx.font = "20px Connection II";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(`${string}`, x + 60, y + 22);
}

pause = button("Pause", 360, 120);
reset = button("Reset", 360, 170);

for (i = 0; i < states.length; i++) {
  states[i] = state_generate(10);
}

// states[430] = 1;
// states[430 - 51] = 1;
// states[430 + 51] = 1;

function draw_states() {
    for (i = 0; i < states.length; i++) {
        if (states[i] == 1) {
            ctx.beginPath();
            ctx.rect((i % wid) * size + 20, Math.floor(i / wid) * size + 20, size, size);
            ctx.fill();
        }
    }
}

function check_state() {
    newstate = new Array();
    for (i = 0; i < states.length; i++) {
        active = 0;
        cell = states[i];
        if (states[i - (wid + 1)] == 1) {
            active++
        }
        if (states[i - wid] == 1) {
            active++
        }
        if (states[i - (wid - 1)] == 1) {
            active++
        }
        if (states[i - 1] == 1) {
            active++
        }
        if (states[i + 1] == 1) {
            active++
        }
        if (states[i + (wid - 1)] == 1) {
            active++
        }
        if (states[i + wid] == 1) {
            active++
        }
        if (states[i + (wid + 1)] == 1) {
            active++
        }

        if (active > 3) {
            newstate.push(0);
        }
        else if (active == 3) {
            newstate.push(1);
        }
        else if (states[i] == 1 && active == 2) {
            newstate.push(1);
        }
        else if (active <= 2) {
            newstate.push(0);
        }
    }
    // console.log(newstate);
    // console.log(states)
    states = newstate;
}

function draw_ui() {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#000";
    ctx.strokeRect(19,19,302,302);
    ctx.stroke();

    ctx.font = "20px Connection II";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Conway's", 420, 40);
    ctx.fillText("Game Of Life!", 420, 65);
}

function game() {
    ctx.clearRect(20, 20, wid * size, hgt * size);
    draw_ui();
    draw_states();
    check_state();
}
setInterval(game, 100);