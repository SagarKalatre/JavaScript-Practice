function addition() {

    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let add = number1 + number2;
    
    document.getElementById("Result").innerHTML =
        "Addition Result: " + add;
}

function substraction() {

    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let sub = number1 - number2;
    
    document.getElementById("Result").innerHTML =
        "Substraction Result: " + sub;
}

function multiplation() {

    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let mul = number1 * number2;
    
    document.getElementById("Result").innerHTML =
        "Multiplaction Result: " + mul;
}

function division() {

    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let div = number1 / number2;
    
    document.getElementById("Result").innerHTML =
        "Divies Result: " + div;
}