const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#000000";
const DEFAULT_BUTTON = "rgb(241, 239, 239)"
const TOGGLED_COLOR = "rgb(25, 25, 25";
let currentColor = "#000000";
let currentSize = DEFAULT_SIZE;
let currentMode = "pen";

// tool buttons
const colorPicker = document.getElementById("colorPicker");
const pen = document.getElementById("pen");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const x16 = document.getElementById("x16");
const x32 = document.getElementById("x32");
const x64 = document.getElementById("x64");

// Color wheel
colorPicker.oninput = (e) => setColor(e.target.value);
let board = document.querySelector(".board");

//pen and eraser
pen.onclick = () => {currentMode = "pen"
    pen.style.backgroundColor = TOGGLED_COLOR;
    pen.style.color = DEFAULT_BUTTON;
    eraser.style.backgroundColor = DEFAULT_BUTTON;
    eraser.style.color = DEFAULT_COLOR;
};

eraser.onclick = () => {currentMode = "eraser"
    eraser.style.backgroundColor = TOGGLED_COLOR;
    eraser.style.color = DEFAULT_BUTTON;
    pen.style.backgroundColor = DEFAULT_BUTTON;
    pen.style.color = DEFAULT_COLOR;
};

//clear button
clear.onclick = () => reloadBoard();

//sizes
x16.onclick = () => {
    currentSize = 16;
    reloadBoard();
    x16.style.backgroundColor = TOGGLED_COLOR;
    x16.style.color = DEFAULT_BUTTON;
    x32.style.backgroundColor = DEFAULT_BUTTON;
    x32.style.color = DEFAULT_COLOR;
    x64.style.backgroundColor = DEFAULT_BUTTON;
    x64.style.color = DEFAULT_COLOR;
}

x32.onclick = () => {
    currentSize = 32;
    reloadBoard();
    x32.style.backgroundColor = TOGGLED_COLOR;
    x32.style.color = DEFAULT_BUTTON;
    x16.style.backgroundColor = DEFAULT_BUTTON;
    x16.style.color = DEFAULT_COLOR;
    x64.style.backgroundColor = DEFAULT_BUTTON;
    x64.style.color = DEFAULT_COLOR;
}

x64.onclick = () => {
    currentSize = 64;
    reloadBoard();
    x64.style.backgroundColor = TOGGLED_COLOR;
    x64.style.color = DEFAULT_BUTTON;
    x32.style.backgroundColor = DEFAULT_BUTTON;
    x32.style.color = DEFAULT_COLOR;
    x16.style.backgroundColor = DEFAULT_BUTTON;
    x16.style.color = DEFAULT_COLOR;
}

// determines whether or not a person is holding down their mouse
let holding = false;
document.body.onmousedown = () => (holding = true);
document.body.onmouseup = () => (holding = false);

function setColor(newColor){
    currentColor = newColor;
     colorPicker.style.backgroundColor = newColor;
}

function reloadBoard(){
    board.innerHTML = "";
    createBoard(currentSize);
}

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    let numSquares = size * size;

    for(i = 0; i < numSquares; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.addEventListener("mousedown", colorChange);
        gridSquare.addEventListener("mouseover", holdcolorChange);
        board.appendChild(gridSquare);
    }
}

function holdcolorChange(e){
    if(e.type = "mouseover" && holding == false)return
    if(currentMode === "pen"){
        e.target.style.backgroundColor = currentColor;
    }else{
        e.target.style.backgroundColor = "white";
    }
}

function colorChange(e){
    if(currentMode === "pen"){
        e.target.style.backgroundColor = currentColor;
    }else{
        e.target.style.backgroundColor = "white";
    }
    
}

window.onload = () => {
    createBoard(DEFAULT_SIZE);
  }