var win = document.getElementById("window");
var windowed = true;

function changeWindow()
{
    if (windowed == true)
    {
        win.setAttribute("class", "game full")
        return windowed = false
    }
    if (windowed == false)
    {
        win.setAttribute("class", "game windowed");
        return windowed = true;
    }
}