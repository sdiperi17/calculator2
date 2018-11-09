document.addEventListener("DOMContentLoaded", function() {
    var inputVal = document.getElementById("inputNumber");

    document.getElementById("1").addEventListener("click", function() {
        inputVal.value += `1`;
    });

    document.getElementById("2").addEventListener("click", function() {
        inputVal.value += `2`;
    });

    document.getElementById("3").addEventListener("click", function() {
        inputVal.value += `3`;
    });

    document.getElementById("4").addEventListener("click", function() {
        inputVal.value += `4`;
    });

    document.getElementById("5").addEventListener("click", function() {
        inputVal.value += `5`;
    });

    document.getElementById("6").addEventListener("click", function() {
        inputVal.value += `6`;
    });

    document.getElementById("7").addEventListener("click", function() {
        inputVal.value += `7`;
    });

    document.getElementById("8").addEventListener("click", function() {
        inputVal.value += `8`;
    });

    document.getElementById("9").addEventListener("click", function() {
        inputVal.value += `9`;
    });

    document.getElementById("zero").addEventListener("click", function() {
        if (inputVal.value.length > 0) {
            inputVal.value += `0`;
        }
    });

    document.getElementById("decimal").addEventListener("click", function() {
        if (inputVal.value.length > 0) {
            inputVal.value += `.`;
        }
    });

    document.getElementById("plus").addEventListener("click", function() {
        if (inputVal.value.length > 0 && inputVal.value.indexOf("+") < 0) {
            inputVal.value += `+`;
        }
    });

    document.getElementById("subtract").addEventListener("click", function() {
        let valueArr = inputVal.value.split("");
        if (inputVal.value.length > 0 && inputVal.value.indexOf("-") < 0) {
            inputVal.value += `-`;
        }
    });

    document.getElementById("multiply").addEventListener("click", function() {
        if (inputVal.value.length > 0 && inputVal.value.indexOf("*") < 0) {
            inputVal.value += `*`;
        }
    });

    document.getElementById("divide").addEventListener("click", function() {
        if (inputVal.value.length > 0 && inputVal.value.indexOf("/") < 0) {
            inputVal.value += `/`;
        }
    });

    document.getElementById("percentage").addEventListener("click", function() {
        if (inputVal.value.length > 0 && inputVal.value.indexOf("%") < 0) {
            inputVal.value = inputVal.value / 100;
        }
    });

    document.getElementById("equal").addEventListener("click", function() {
        if (inputVal.value.length > 0 && inputVal.value.indexOf("=") < 0) {
            inputVal.value = eval(inputVal.value);
        }
    });

    document.getElementById("+/-").addEventListener("click", function() {
        let valueArr = inputVal.value.split("");
        if (valueArr[0] === "-") {
            valueArr.shift();
            inputVal.value = valueArr.join("");
        } else {
            valueArr.unshift("-");
            inputVal.value = valueArr.join("");
            console.log(valueArr);
        }
    });

    document.getElementById("clear").addEventListener("click", function() {
        inputVal.value = "";
    });
});
