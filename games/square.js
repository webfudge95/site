var canvas = document.getElementById("game");
ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false
ctx.mozImageSmoothing = false
canvas.width = 512;
canvas.height = 342;
canvas.style.backgroundColor = "#000"
x = 680 //Math.floor((Math.random() * canvas.width) + 1);
y = Math.floor((Math.random() * canvas.height) + 1);

function not_complete() {
    ctx.beginPath();
    ctx.font = "20px Connection II";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("Game not complete.. yet!", canvas.width / 2, canvas.height - 30);
}

if ( y < 30)
{
    y = 31
}
if ( x > canvas.width - 30)
{
    x = canvas.width - 31
}
if (y )
function coinToss()
{
	coin = Math.floor((Math.random() * 2 + 1));
    if (coin == 1)
    {
   	    return true;
    }
    else
    {
   	    return false;
    }
}

reversew = coinToss();
reverseh = coinToss();

function drawCat()
{
	rwidth = 30;
    rheight = 30;
  
	ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.beginPath();
  
    img = new Image();
    img.src = "assets/heart.png";
    
    not_complete();
    ctx.drawImage(img, x, y - rheight, rwidth, rheight)
    if (reversew != true) {
        x += 1;
    }
    else if (reversew == true) {
        x -= 1;
    }
    if (reverseh != true)
    {
        y += 1;
    }
    if (reverseh == true)
    {
        y -= 1;
    }
    
    if (y == canvas.height) {
        reverseh = true;
    }
    if (y - rheight == 0) {
        reverseh = false;
    }
    if (x + rwidth == canvas.width) {
        reversew = true;
    }
    else if (x == 0) {
        reversew = false;
    }
}


setInterval(drawCat, 10)