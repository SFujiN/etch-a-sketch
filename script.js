const container = document.querySelector('.container');
const resizeBtn = document.querySelector('#resize');

function createGrid(n) {
    // create an n x n grid
    for (let i=0; i<(n*n); i++) {
        let square = document.createElement('div');
        square.classList.add('square-16');
        container.appendChild(square);
    }
}

createGrid(16);

let grids = document.querySelectorAll('.square-16');
grids.forEach(grid => {
    grid.addEventListener('mouseover', (e) => {
        grid.classList.add('black');
    });
});

resizeBtn.addEventListener('click', () => {
    prompt('Enter grid size: ');
    delete grids;
    console.log('click');
});