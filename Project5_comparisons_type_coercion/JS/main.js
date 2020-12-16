document.write(typeof "Word"); // string  //

document.write(typeof 3); // number // 

function my_function() {
    document.getElementById("Test").innerHTML = 0/0; // cannot divide 0 by 0 //
}

function true_function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string'); // outcome will be true // 
}

function false_function() {
    document.getElementById("Test").innerHTML = isNaN('007'); // outcome will be flase because 007 is a number // 
}

document.write(2E310); // infinity // 

document.write(-3E310); // negative infinity // 

document.write(10 > 2); // true // 

document.write(10 < 2); // false // 

console.log(2 + 2); // open console // 

document.write("10" + 5); 

console.log(false); // false in the console // 

document.write(10 == 10); // another way for true // 

document.write(3 == 11); // another way for false // 

X = 10;
Y = 10;
document.write(X === Y); // true // 

X= 82;
Y = "82";
document.write(X === Y); // flase y is not the same as x //

document.write(5 > 2 && 10 > 4); // true // 

document.write(5 > 10 || 10 > 20); // this is false //

function not_function() { // defines the function //
    document.getElementById("not").innerHTML = !(20 > 10); // this will display false // 
}

function me_function() { // function //
    document.getElementById("me").innerHTML = !(5 > 10); // this will display true //
}