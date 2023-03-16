const container = document.querySelector('.container');
const resizeBtn = document.querySelector('#resize');
const SIDE = 960;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function createGrid(n) {
    // create an n x n grid
    for (let i=0; i<(n*n); i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        let dimensions = (1/n) * 100;
        square.style.width = dimensions + '%';
        square.style.height = dimensions + '%';

        square.addEventListener('mouseover', (e) => {
            if (mouseDown) {
                square.classList.add('black');
            }
        });
        square.addEventListener('mousedown', (e) => {
            square.classList.add('black');
        });
        container.appendChild(square);
    }
}

createGrid(16);

resizeBtn.addEventListener('click', () => {
    let size;
    do {
        size = parseInt(prompt('Enter grid size: '));
        if (size > 100) {
            alert('Choose grid size less than 100');
        }
    } while(size > 100);
    let grids = document.querySelectorAll('.square');
    grids.forEach(grid => {
        container.removeChild(grid);
    });
    createGrid(size);
});