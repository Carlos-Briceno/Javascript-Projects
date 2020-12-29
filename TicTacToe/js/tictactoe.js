let activePlayer = "X";
let selectedSquares = [];

function placeXOrO(squareNumber) { // defines the function 
    if (!selectedSquares.some(element => element.includes(squareNumber))) { // if statement for sleceted squares 
        let select = document.getElementById(squareNumber); // grabs element id 
        if(activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")'; // gets the image for x 
        } else {
            select.style.backgroundImage = 'url("images/o.png")'; // gets the image for o 
        }
        selectedSquares.push(squareNumber + activePlayer); // for active player
        checkWinConditions();
        if (activePlayer === 'X') { // if x 
            activePlayer = 'O'; // if o 
        } else { // else statment 
            activePlayer = 'X'; // active player x 
        }
        if(activePlayer === 'O'){
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    function computersTurn() { // defines the function 
        let success = false; // false 
        let pickASquare; // lets the computer pick a square 
        while(!success){ 
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    } 
}
// this section defines all the different ways to win 
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520); }
    else if (selectedSquares.length >= 9) {
        Audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if(a === true && b === true && c === true) { return true; }
    }
}

function disableClick() { // defines the function 
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}
function audio(audioURL); // audio function 
let audio = new Audio(audioURL);
audio.play();
// this section draws the win line on the canvas 
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
function animateLineDrawing() { // defines the function 
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608); // when to draw the line 
    c.beginPath(); // the path of the line 
    c.moveTo(x1, y1); // which way the line goes 
    c.lineTo(x, y); // axis of the line 
    c.lineWidth = 10; // width of the line 
    c.strokeStyle = 'rgba(70, 255, 40, .8)'; // color of the line 
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
}
function clear() { // defines the function 
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}
disableClick();
audio('./media/winGame.mp3'); // audio when someone wins the game 
animateLineDrawing();
setTimeout(function () { clear(); resetGame(); }, 1000); // resets the game 
} 
// resets the game 
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(string(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}