
let countBtn = document.getElementById("count");
    res = document.getElementById("res"),
    stringNumbers = document.getElementById("string-numbers"),
    stringNumbersValue = document.getElementById("string-numbers-value"),
    minimum = document.getElementById("min"),
    maximum = document.getElementById("max");

stringNumbersValue.hidden = true;

stringNumbers.addEventListener("click", function() {
    if (stringNumbers.checked) {
        stringNumbersValue.hidden = false;
        minimum.disabled = true;
        maximum.disabled = true;
    } else {
        stringNumbersValue.hidden = true;
        minimum.disabled = false;
        maximum.disabled = false;
    }

});


countBtn.addEventListener("click", function() {
    let min = +minimum.value;
    let max = +maximum.value;   
    if (min > max) {
        res.textContent = "Ошибка! Максимальное значение меньше минимального.";
        return;
    }
    if (stringNumbers.checked) {
        let arr = [];
        arr = stringNumbersValue.value.split(" ");
        console.log(arr);
        let rand = Math.round(Math.random() * (arr.length-1));
        console.log(rand);
        console.log(arr[rand]);
        res.textContent = arr[rand];

    } else {
        let rand = Math.round(Math.random() * (max-min) + min);
        res.textContent = rand;
    }    
});




