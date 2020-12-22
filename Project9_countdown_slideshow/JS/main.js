function countdown() { // defines the function //
    var seconds = document.getElementById("seconds").value // variable // 

    function tick() { // function tick //
        seconds = seconds - 1; // seconds // 
        timer.innerHTML = seconds; // timer // 
        setTimeout(tick, 1000); // set timer // 
    if(seconds == -1) { // if statement // 
        alert("Time's up!"); // alert // 
    }
        }
    tick(); // tick // 
}

var slideIndex = 1; // var slideIndex // 
showSlides(slideIndex);

function plusSlides(n) { // function // 
    showSlides(slideIndex += n);
}

function currentSlide(n) { // function // 
    showSlides(slideIndex = n);
}

function showSlides(n) { // defines the function // 
    var i; // variable // 
    var slides = document.getElementsByClassName("mySlides"); // gets id // 
    var dots = document.getElementsByClassName("dot"); // gets id // 
    if (n > slides.length) {slideIndex = 1} // if statement // 
    if (n < 1) {slideIndex = slides.length} // if statement // 
    for (i = 0; i < slides.length; i++) { // fslides length // 
        slides[i].style.display = "none"; // displays // 
    }
    for (i = 0; i < dots.length; i++) { // i = 0 // 
        dots[i].className = dots[i].className.replace(" active", ""); // gets class name and replaces class name // 
    }
    slides[slideIndex-1].style.display = "block";
    dots[slidesIndex-1].className += " active";
}