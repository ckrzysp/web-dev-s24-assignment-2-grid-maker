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
    if(numRows <= 0) 
    {
        // Error Handling, no rows/cols left
        numRows = 0;
    }
    if(numRows <= 1) 
    {
        // If last row has more than 1 block, cols must be 0 to avoid count failure
        numCols = 0;
        let cols = document.getElementsByTagName("tr");

        for(let i = 0; i < numCols; i++) 
        {
            cols[numRows-1].removeChild(cols[numRows-1].lastChild);
        }
        
        cols[numRows-1].remove();

        numRows = numRows - 1;
    }
    else 
    {
        // General case
        let cols = document.getElementsByTagName("tr");

        for(let i = 0; i < numCols; i++) 
        {
            cols[numRows-1].removeChild(cols[numRows-1].lastChild);
        }
        
        cols[numRows-1].remove();

        numRows = numRows - 1;
    }
}

// Remove a column
function removeC() {
    if(numCols <= 0) 
    {
        // Error Handling, no rows/cols left
        numCols = 0;
    }
    if(numCols <= 1) 
    {
        // If last col has more than 1 block, rows must be 0 to avoid count failure
        let rows = document.getElementsByTagName("tr");
        
        for(let i = 0; i < numRows; i++) 
        {
            rows[i].removeChild(rows[i].lastChild);
        }

        numCols = numCols - 1;
        
        for(let i = numRows-1; i >= 0; i--) 
        {
            rows[i].remove();
        }

        numRows = 0;
    }
    else 
    {
        // General Case
        let rows = document.getElementsByTagName("tr");
        
        for(let i = 0; i < numRows; i++) 
        {
            rows[i].removeChild(rows[i].lastChild);
        }

        numCols = numCols - 1;
    }
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

    //for each row, update each cell without checking for white/colored cell
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rows[i].children[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let rows = document.getElementsByTagName("tr");

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rows[i].children[j].style.backgroundColor = "white";
        }
    }
}
