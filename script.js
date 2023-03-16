const container = document.querySelector('.container');
const resizeBtn = document.querySelector('#resize');

const SIDE = 960;

function createGrid(n) {
    // create an n x n grid
    for (let i=0; i<(n*n); i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        let dimensions = (1/n) * 100;
        square.style.width = dimensions + '%';
        square.style.height = dimensions + '%';

        square.addEventListener('mouseover', (e) => {
            square.classList.add('black');
        });
        container.appendChild(square);
    }
}

createGrid(16);

resizeBtn.addEventListener('click', () => {
    let size = parseInt(prompt('Enter grid size: '));
    let grids = document.querySelectorAll('.square');
    grids.forEach(grid => {
        container.removeChild(grid);
    });
    createGrid(size);
});