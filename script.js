const container = document.querySelector('.container');

function createGrid(n) {
    // create an n x n grid
    for (let i=0; i<(n*n); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

createGrid(16);

let grids = document.querySelectorAll('.square');
grids.forEach(grid => {
    grid.addEventListener('mouseover', (e) => {
        grid.classList.add('black');
        console.log(e.target);
    });
});