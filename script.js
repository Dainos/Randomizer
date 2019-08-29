
let countBtn = document.getElementById("count");
    res = document.getElementById("res");

countBtn.addEventListener("click", function() {
    let min = +document.getElementById("min").value;
    let max = +document.getElementById("max").value;   
    if (min > max) {
        res.textContent = "Ошибка! Максимальное значение меньше минимального.";
        return;
    }    
    let rand = Math.round(Math.random() * (max-min) + min);
    res.textContent = rand;
});


