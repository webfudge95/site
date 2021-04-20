url = location.toString();

if (url.includes("#snake")) {
    change_game("snake");
}
else if (url.includes("#heart")) {
    change_game("heart");
}
else if (url.includes("#gol")) {
    change_game("gol");
}
else if (url.includes("#nac")) {
    change_game("nac");
}
else {
    games = ["heart", "nac", "snake", "gol"];
    rand_num = random(games.length);
    console.log(rand_num);
    ran_game = games[rand_num]
    change_game(ran_game);
}

function random(chance) {
    return Math.floor((Math.random() * chance));
}

function change_game(game) {
    // var check = document.getElementById('gamescript');
    // if (check) {
    //     document.getElementById('gamescript').remove();
    // }
    if (game == "snake") {
        var game = document.createElement('script');
        game.src = 'games/snake.js';
        game.id = "gamescript";
        footer = document.getElementsByTagName('FOOTER')[0];
        footer.append(game);
    }
    else if (game == "heart") {
        var game = document.createElement('script');
        game.src = 'games/square.js';
        game.id = "gamescript";
        footer = document.getElementsByTagName('FOOTER')[0];
        footer.append(game);
    }
    else if (game == "nac") {
        var game = document.createElement('script');
        game.src = 'games/nac.js';
        game.id = "gamescript";
        footer = document.getElementsByTagName('FOOTER')[0];
        footer.append(game);
    }
    else if (game == "gol") {
        var game = document.createElement('script');
        game.src = 'games/gol.js';
        game.id = "gamescript";
        footer = document.getElementsByTagName('FOOTER')[0];
        footer.append(game);
    }
}

function reload(game) {
    window.location.hash = game;
    location.reload();
}