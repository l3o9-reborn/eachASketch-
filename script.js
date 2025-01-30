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

// Function to generate random RGB color
function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}


// Function to darken color by 10% on each hover
function darkenColor(rgb, percentage){
    const match=rgb.match(/rgb\((\d+), (\d+), (\d+)\)/);
    if(!match) return rgb; // If not a valid color format, return original

    let [r, g, b]=[parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];

    r = Math.floor(r * (1 - percentage));
    g = Math.floor(g * (1 - percentage));
    b = Math.floor(b * (1 - percentage));

    return `rgb(${r}, ${g}, ${b})`;
}



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
            cell.dataset.hoverCount = 0; // Initialize hoverCount to 0
            row.appendChild(cell);
    
            // Add hover effect
            cell.addEventListener("mouseover", () => {
                if (cell.dataset.hoverCount == 0) {
                    // Set a random color when the mouse first hovers
                    cell.style.backgroundColor = randomColor();
                } else {
                    // Darken color progressively on each hover interaction
                    cell.style.backgroundColor = darkenColor(cell.style.backgroundColor, 0.1);
                }

                // Increment the hover count
                cell.dataset.hoverCount++;
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
    let newCellNumber=parseInt(window.prompt('Enter Number of Cells in the Grid'));
     // Validate input to ensure it's a positive integer and not too large
     if (isNaN(newCellNumber) || newCellNumber <= 0) {
        alert('Please enter a valid number greater than 0.');
    } else if (newCellNumber > 100) {
        alert('Please enter a number less than or equal to 100 for better performance.');
    } else {
        cellNumber = newCellNumber;
        createGrid(cellNumber); // Recreate the grid with the new number of cells
    }
});


