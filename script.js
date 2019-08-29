
let countBtn = document.getElementById("count");

countBtn.addEventListener("click", function() {
    let min = +document.getElementById("min").value;
    let max = +document.getElementById("max").value;   
    if (min > max) {
        alert("Ошибка! \nМаксимальное значение меньше минимального.");
        return;
    }    
    let rand = Math.round(Math.random() * (max-min) + min);
    document.getElementById("res").textContent = rand;
});


