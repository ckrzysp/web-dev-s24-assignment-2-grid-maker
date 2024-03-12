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
    let rows = document.getElementsByTagName("tr");
    
    //remove the last element from each row
    for (i = 0; i < numRows; i++) {
        rows[i].removeChild(rows[i].lastChild);
    }

    numCols = numCols - 1;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}