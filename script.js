
let countBtn = document.getElementById("count"),
    res = document.getElementById("res"),
    radioBtns = document.getElementsByName("mode"),
    radioBtns2 = document.getElementById("radio_buttons"),
    stringNumbersValue = document.getElementById("string-numbers-value"),
    minimum = document.getElementById("min"),
    maximum = document.getElementById("max"),
    amount = document.getElementById("amount"),
    reps = document.getElementById("reps");

radioBtns2.addEventListener("click", function(){
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
        let numbs = [],
        arr = [],
        rand;
        if (stringNumbersValue.value == "") {
            alert("Заполните поле для чисел!");
            return;
        }
        numbs = stringNumbersValue.value.split(" ");        
        
        for (let i = 0; i < +amount.value; i++) {
            rand = Math.round(Math.random() * (numbs.length-1));
            if (reps.checked && arr.indexOf(numbs[rand], 0) != -1) {
                do rand = Math.round(Math.random() * (numbs.length-1));
                while (arr.indexOf(numbs[rand], 0) != -1);
                console.log(numbs[rand]);
            } 
            arr.push(numbs[rand]);
        }
        res.textContent = arr.join(" ");

    } else if (radioBtns[0].checked) {
        let rand, 
        arr = [];
        for (let i = 0; i < +amount.value; i++) {
            rand = Math.round(Math.random() * (max-min) + min); 
            if (reps.checked && arr.indexOf(rand, 0) != -1) {
                do rand = Math.round(Math.random() * (max-min) + min);
                while (arr.indexOf(rand, 0) != -1);
            }                     
            arr.push(rand);
        }        
        res.textContent = arr.join(" ");
    }    
});