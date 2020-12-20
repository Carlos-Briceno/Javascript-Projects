function full_sentence() { // defines the function //
    var part_1 = "I have "; // part 1 // 
    var part_2 = "made this "; // part 2 //
    var part_3 = "into a complete "; // part 3 //
    var part_4 = "sentence."; // part 4 //
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // whole sentence //
    document.getElementById("Concatentate").innerHTML = whole_sentence; // id //
}

function slice_method() { // defines the function // 
    var Sentence = "All work and no play makes Johnny a dull boy."; // sentence variable // 
    var Section = Sentence.slice(27,33); // slice method //
    document.getElementById("slice").innerHTML = Section; // gets the id //
}

function string_method() { // defines the function // 
    var X = 182; // variable // 
    document.getElementById("numbers_to_string").innerHTML = X.toString(); // string method // 
}

function precision_method() { // defines the function //
    var X = 12938.3012987376112; // this is the variable //
    document.getElementById("precision").innerHTML = X.toPrecision(10); // this is to.precision method //
}