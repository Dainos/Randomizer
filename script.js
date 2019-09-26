
let countBtn = document.getElementById("count"),
    res = document.getElementById("res"),
    radioBtns = document.getElementsByName("mode"),
    radioBtns2 = document.getElementById("radio_buttons"),
    stringNumbersValue = document.getElementById("string-numbers-value"),
    minimum = document.getElementById("min"),
    maximum = document.getElementById("max"),
    amount = document.getElementById("amount");

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
        let arr = [],
        rand,
        result = "";
        if (stringNumbersValue.value == "") {
            alert("Заполните поле для чисел!");
            return;
        }
        arr = stringNumbersValue.value.split(" ");
        
        for (let i = 0; i < +amount.value; i++) {
            rand = Math.round(Math.random() * (arr.length-1));
            result += arr[rand] + " ";
        }
        res.textContent = result;

    } else if (radioBtns[0].checked) {
        let rand, 
        result = "";
        for (let i = 0; i < +amount.value; i++) {
            rand = Math.round(Math.random() * (max-min) + min);
            console.log(rand);
            result += rand + " ";
        }
        res.textContent = result;
    }    
});




