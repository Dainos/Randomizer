
let countBtn = document.getElementById("count"),
    res = document.getElementById("res"),
    radioBtns = document.getElementsByName("mode"),
    radioBtns2 = document.getElementById("radio_buttons"),
    stringNumbersValue = document.getElementById("string-numbers-value"),
    minimum = document.getElementById("min"),
    maximum = document.getElementById("max");

stringNumbersValue.hidden = true;

radioBtns2.addEventListener("click", function(){
    console.log(radioBtns[0].checked);
    if (radioBtns[1].checked) {
        stringNumbersValue.hidden = false;
        minimum.disabled = true;
        maximum.disabled = true;
    } else if (radioBtns[0].checked) {
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
    if (radioBtns[1].checked) {
        let arr = [];
        arr = stringNumbersValue.value.split(" ");
        let rand = Math.round(Math.random() * (arr.length-1));
        res.textContent = arr[rand];

    } else if (radioBtns[0].checked) {
        let rand = Math.round(Math.random() * (max-min) + min);
        res.textContent = rand;
    }    
});




