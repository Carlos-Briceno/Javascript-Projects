function count_to_ten() { // defines the function //
    var Digit = ""; // variable digit //
    var X = 1; // variable X //
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit; // shows up in html // 
}

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // variables for array // 
    var Content = ""; // variable //
    var Y; // variable for Y // 
    function for_loop() { // defines the function //
        for (Y = 0; Y < Instruments.length; Y++) { // array //
            Content += Instruments[Y] + "<br>"; 
        }
        document.getElementById("list_of_instruments").innerHTML = Content; // shows up in html //
    }

    function array_function() { // defines the function //
        var Cat_Picture = []; // variable cat picture //
        Cat_Picture[0] = "sleeping"; // sleeping //
        Cat_Picture[1] = "playing"; // playing //
        Cat_Picture[2] = "eating"; // eating //
        Cat_Picture[3] = "purring"; // purring //
        document.getElementById("array").innerHTML = "In this picture, the cat is " + // gets element id for array // 
            Cat_Picture[2] + "."; // gets the eating cat picture variable // 
    }

    function constant_function() { // defines the function // 
        const Musical_Instrument = {type:"guitar", brand:"Fender", color:"red"}; // description of the instrument // 
        Musical_Instrument.color = "black"; // color // 
        Musical_Instrument.price = "$1,000"; // price // 
        document.getElementById("constant").innerHTML = "The cost of the " + // gets the element id //
            Musical_Instrument.type + " was " + Musical_Instrument.price;  // will show price in html //        
    }

    var X = 82; // variable 82 //
    document.write(X); // writes variable 82 //
{
    let X = 33; // changes cariable to 33 // 
    document.write("<br>" + X); // writes 33 //
}
document.write("<br>" + X);

let car = { // keyword // 
    make: "Dodge ", // make of car //
    model: "Viper ", // model of the car // 
    year: "2021 ", // year of the car // 
    color: "red ", // color of the car // 
    description : function() { // gets function // 
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();  // shows all of the cars description in html // 