const body=document.querySelector('body');

//grid reset button 
const resetButton=document.createElement('button');
resetButton.classList.add("resetButton");
resetButton.textContent='Reset Grid';
resetButton.style.border='2px solid #66a6ff'
resetButton.style.borderRadius='6px';
resetButton.style.padding='4px 6px'
resetButton.style.textAlign='center'
body.appendChild(resetButton);

let cellNumber=16;



// the main container
const container=document.createElement('div');
body.appendChild(container);

container.style.display='flex';
container.style.flexWrap='wrap';
container.style.width='960px';
container.style.height='960px';
container.style.margin= '20px auto'
container.style.border=' 2px solid #123';
container.style.boxShadow='0 4px 8px rgba(0,0,0,0.2)';
container.style.background='#f4f4f9';


// Function to create the grid
function createGrid(cellNumber)
{

    // Clear existing grid before creating a new one
    container.innerHTML = '';

    let cellSize = 960 / cellNumber; // Calculate the size of each cell based on the grid size

    for (let i = 0; i < cellNumber; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";  // Make each row a flex container
        row.style.width = "100%";    // Ensure row takes full container width
        row.style.justifyContent = "center";  // Center cells horizontally
    
        // Create 16 cells in each row
        for (let j = 0; j < cellNumber; j++) {
            const cell = document.createElement("div");
            cell.style.backgroundColor = "#ffffff";
            cell.style.border = "1px solid #ddd";
            cell.style.width = `${cellSize}px`; // Set width of each cell
            cell.style.height =`${cellSize}px`; // Set height of each cell
            row.appendChild(cell);
    
            // Add hover effect
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "#66a6ff";
            });
        }
    
        // Append the row to the container
        container.appendChild(row);
    }

}

// Create the initial grid
createGrid(cellNumber);

// Event listener to reset the grid on button click
resetButton.addEventListener('click', ()=>{
    //needs to add input validation
    let newCellNumber=parseInt(window.prompt('Enter Number of Cells in the Grid'));
    createGrid(newCellNumber);
   
});


