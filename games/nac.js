var canvas = document.getElementById("game");
ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 300;

squares = [0,0,0,0,0,0,0,0,0];
squarex = [170,250,330,170,250,330,170,250,330];
squarey = [70,70,70,150,150,150,230,230,230];

let mx = 0;
let my = 0;
let md = false;

canvas.addEventListener("mousemove", e =>
{
    mx = e.offsetX;
    my = e.offsetY;     
}, false);
canvas.addEventListener("mousedown", e =>
{
    md = true;
}, false); 

function drawX(x, y)
{
    ctx.beginPath()
    ctx.moveTo(x - 20, y - 20);
    ctx.lineTo(x + 20, y + 20);
    ctx.moveTo(x - 20, y + 20);
    ctx.lineTo(x + 20, y - 20);
    ctx.stroke();
}
function drawO(x, y)
{
    ctx.beginPath()
    ctx.arc(x, y, 22, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawGrid()
{
    ctx.setLineDash([]);
	ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    // 1st Vertical
    ctx.moveTo(210, 30);
    ctx.lineTo(210, 270);
    // 2nd Vertical
    ctx.moveTo(290, 30);
    ctx.lineTo(290, 270);
    // 1st Horizontal
    ctx.moveTo(130, 110);
    ctx.lineTo(370, 110);
    // 2nd Horizontal
    ctx.moveTo(130, 190);
    ctx.lineTo(370, 190);
    ctx.lineWidth = 2;
    ctx.stroke();

    for (i = 0; i < squares.length; i++)
    {
        if (squares[i] == 1)
        {
            drawX(squarex[i],squarey[i])
        }
        else if (squares[i] == 2)
        {
            drawO(squarex[i],squarey[i])
        }
    }
}

function highlight()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawGrid();
    if (130 < mx && mx < 210 && 30 < my && my < 110)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(140, 40, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[0] = 1;
            return clearInterval(place);
        }
    }
    else if (210 < mx && mx < 290 && 30 < my && my < 110)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(220, 40, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[1] = 1;
            return clearInterval(place);
        }
    }
    else if (290 < mx && mx < 370 && 30 < my && my < 110)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(300, 40, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[2] = 1;
            return clearInterval(place);
        }
    }
    else if (130 < mx && mx < 210 && 110 < my && my < 190)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(140, 120, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[3] = 1;
            return clearInterval(place);
        }
    }
    else if (210 < mx && mx < 290 && 110 < my && my < 190)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(220, 120, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[4] = 1;
            return clearInterval(place);
        }
    }
    else if (290 < mx && mx < 370 && 110 < my && my < 190)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(300, 120, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[5] = 1;
            return clearInterval(place);
        }
    }
    else if (130 < mx && mx < 210 && 190 < my && my < 270)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(140, 200, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[6] = 1;
            return clearInterval(place);
        }
    }
    else if (210 < mx && mx < 290 && 190 < my && my < 270)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(220, 200, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[7] = 1;
            return clearInterval(place);
        }
    }
    else if (290 < mx && mx < 370 && 190 < my && my < 270)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3])
        ctx.rect(300, 200, 60, 60);
        ctx.stroke();
        if (md == true)
        {
            squares[8] = 1;
            placed = true;
            return clearInterval(place);
        }
    }
}

function place()
{
    ctx.font = "16px Connection II";
    ctx.textAlign = 'center'; 
    ctx.fillText("Select an unocupied square", 250, 290);

    highlight();
}

function game()
{
    placed = false;
    drawGrid();
    place = setInterval(place, 50);
    if (place == true)
    {
        console.log("test");
    }
}