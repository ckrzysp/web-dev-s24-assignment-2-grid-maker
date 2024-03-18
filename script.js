// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows = numRows + 1;
    if (numCols == 0){
        numCols = numCols + 1;
    }
    let grid = document.getElementById("grid");

    // tr is row, td is col
    let new_row = document.createElement("tr");

    // each new row should have numCols columns
    for (let i = 0; i < numCols; i++){
        let new_col = document.createElement("td");
        new_col.style.backgroundColor = "white";
        new_row.appendChild(new_col);
    }

    grid.appendChild(new_row);
}

// Add a column
function addC() {
    numCols = numCols + 1;

    if (numRows == 0){
        addR(); // making row 1 means making col 1 and vice versa
    } else {
        let rows = document.getElementsByTagName("tr");

        // new column means each each existing row should get an additional column box
        for (let i = 0; i < numRows; i++){
            let new_col = document.createElement("td");
            new_col.style.backgroundColor = "white";
            rows[i].appendChild(new_col);
        }
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let rows = document.getElementsByTagName("tr");

    //for each row, update the each cell if it is a blank/white cell
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (rows[i].children[j].style.backgroundColor == "white") {
                rows[i].children[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let rows = document.getElementsByTagName("tr");

    //for each col, update the each cell without checking for white/colored cell
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rows[i].children[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
