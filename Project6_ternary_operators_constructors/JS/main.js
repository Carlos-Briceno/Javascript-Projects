function ride_function() { // defines the function // 
    var height, Can_ride; // variable //
    height = document.getElementById("height").nodeValue; // this is the id for height in html // 
    Can_ride = (height < 52) ? "You are too short":"You are tall enough"; // will be displayed in html //
    document.getElementById("ride").innerHTML = Can_ride + " to ride."; // this is the id for ride in html // 
}

function Vehicle(Make, Model, Year, Color) { // function //
    this.Vehicle_Make = Make; // the make of the car // 
    this.Vehicle_Model = Model; // model of the car // 
    this.Vehicle_Year = Year; // year of the car // 
    this.Vehicle_Color = Color; // color of the car //
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // jacks car // 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // emilys car // 
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); // eriks car // 
function myfunction() {  // defines the function // 
    document.getElementById("keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; // eriks car // 
}

function this_function() { // defines function // 
    document.getElementById("nested_function").innerHTML = Count();
    function Count() { // function for count // 
        var Starting_point = 9; // variable is 9 // 
        function Plus_one() {Starting_point +=1;} // function for plus one // 
        Plus_one();
        return Starting_point; // will show in html // 
    }
}