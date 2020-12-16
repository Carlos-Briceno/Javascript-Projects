function my_dictionary() { // defines the function //
    var Animal = { // variable // 
        Species:"Dog", // species is the key and dog is the vaule // 
        Color:"Black", // key and vaule //
        Breed:"Labrador", // key and vaule //
        Age: 5, // age of dog //
        Sound:"Bark!" // sound of the dog //
    };
    delete Animal.Sound; // removes the vaule //
    document.getElementById("dictionary").innerHTML = Animal.Sound; // shows up as undefined // 
}

function my_dog() { // defines the function // 
    var Animal = { // key and value //
        Species:"Dog", // species of the dog //
        Color:"Black and Tan", // color of the dog //
        Breed:"Shiba Inu", // dogs breed //
        Age:"1", // age of the dog //
        Sound:"Bark", // sound of the dog //
    };
    document.getElementById("dictionary").innerHTML = Animal.Sound; // will show the vauke bark in html // 
}