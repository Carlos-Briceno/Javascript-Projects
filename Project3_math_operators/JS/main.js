function addition_function() { // defines the name of the function //
    var addition = 2 + 2; // variables // 
    document.getElementById("math").innerHTML = "2 + 2 = " + addition; // shows in  html //
}

function subtraction_function() { // name of the function //
    var subtraction = 5 - 2; // variables //
    document.getElementById("math").innerHTML = "5 - 2 = " + subtraction; // shows in html // 
}

function multiplication() { // name of the function //
    var simple_Math = 6 * 8; // variables // 
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math; // shows 6 * 8 = in html // 
}

function division() { // name of the function //
    var simple_Math = 48 / 6; // variables // 
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math; // shows the math problem in html // 
}

function modulus_operator() { // name of the function //
    var simple_Math = 25 % 6; // variables //
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; // shows this in html // 
}

function negation_operator() { // name of the function //
    var x = 10; // variable // 
    document.getElementById("Math").innerHTML = -x; // shows this in html // 
}

window.alert(Math.random() * 100); // alerts a random number when the page loads // 

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);