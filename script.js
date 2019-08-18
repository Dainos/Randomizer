

let min = 1,
    max = 19,
    rand;

function random(){
    rand = Math.round(Math.random()*(max-min)+min);
    document.getElementById("res").textContent = rand;
}
