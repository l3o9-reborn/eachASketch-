const body=document.querySelector('body');

// const button=document.createElement('button');
// button.classList.add("resetButton");
// body.appendChild(button);

let cellNumber=16;

// button.addEventListener('click', ()=>{

// });

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

let cellSize=960/cellNumber;

for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.backgroundColor = '#ffffff';
    cell.style.border = '1px solid #ddd';
    
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#66a6ff"; // Change color on hover
    });

        // // Add click effect to reset color
        // cell.addEventListener("click", () => {
        //     cell.style.backgroundColor = "#ffffff"; // Reset color on click
        // });
    

    container.appendChild(cell);


}
