function first1(num) {
    var value1 = document.getElementById("result");
    value1.value = value1.value + num;
}

function clear1() {
    var value2 = document.getElementById("result");
    value2.value = "";
}

function getResult() {
    var value3 = document.getElementById("result");
    value3.value = eval(value3.value);
}