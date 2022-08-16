const cells = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.classList.length < 2){
            cell.classList.add(board.classList[1])
            changePlayer();
        }
        return
    })
});

function changePlayer () {
    if (board.classList[1] === 'x') {
        board.classList = 'board o'
        console.log('o')
    } else {
        board.classList = 'board x'
        console.log('x')
    }
}