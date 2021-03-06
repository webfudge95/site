// Defining canvas
const cat = document.getElementById("cat");
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

function catWag() {
    cat.setAttribute('class', 'wag');
    sleep(500).then(() => cat.setAttribute('class', 'sitting'));
}

cat.setAttribute('class', 'climbing');
setInterval(catWag, 5000);