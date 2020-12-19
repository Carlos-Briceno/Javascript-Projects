function Add_numbers_1() { // function //
    var A = 10; // varible is 10 //
    console.log(15 + A); // will show up in the console // 
}
function Add_numbers_2() { // defines the function //
    var A = 10; // variable is 10 //
    console.log(A + 100); // will show up in the console //
}
Add_numbers_1(); // function //
Add_numbers_2(); // function //

var X = 20; // variable is 20 //
function Add_numbers_3() { // defines the function //
    document.write(10 + X + "<br>"); // writes this out // 
}
function Add_numbers_4() { // function //
    document.write(X + 100); // writes this out //
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() { // defines the function // 
    var D = 10; // variable for D is 10 //
    document.write(20 + D + "<br>"); // writes this out //
}
function Add_numbers_6() { // defines the function // 
    var D = 10; // variable is 10 // 
    document.write(D + 100); // shows answer in html // 
}
Add_numbers_5();
Add_numbers_6();

if (1 < 2) { // if statement // 
    document.write( "The left number is smaller than the number on the right. ")
}

function get_Date() { // defines the function //
    if (new Date().getHours() < 18) { // if statement //
        document.getElementById("Greeting").innerHTML = "How are you today?"; // if less than it will show this //
    }
}

function age_function() { // defines the function //
    Age = document.getElementById("age").value; // gets the id age // 
    if (Age >= 18) {
        Vote = "You are old enough to vote!"; // true // 
    }
    else {
        Vote = "You are not old enough to vote!"; // false //
    }
    document.getElementById("how_old_are_you?").innerHTML = Vote; // displays in html //
}

function time_function() { // defines the function // 
    var Time = new Date().getHours(); // gets the hours // 
    var Reply; // variable for reply // 
    if (Time < 12 == Time > 0) { // if statement //
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) { // else if statement //
        Reply = "It is the afternoon.";
    }
    else { // else statement // 
        Reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = Reply; // shows in html // 
}