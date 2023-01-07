//Targeting the nodes with Selectors

const container = document.querySelector ('.container');
const pickUpColor = document.querySelector ('#base');
const colorButtons = document.querySelector ('.btn');
let color = 'black';

function createGrid (gridSize){
    for ( i = 0; i < gridsize ** 2; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.style.border = '1px solid black';
        container.appendChild(newDiv);
        container.style.gridTemplateColumns = `repeat(${gridsize},1fr)`;
        container.style.gridTemplateRows = `repeat(${gridsize},1fr)`;

    }
    const gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('mouseover', colorGrid));
}
