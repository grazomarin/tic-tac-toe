const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const board = document.getElementById('board')
const cellElements = document.querySelectorAll('[data-cell]')


cellElements.forEach(cell => {
    cell.addEventListener('click', () => {
        cell.classList.add(board.classList[1])
        if (checkWin(board.classList[1])) {
            console.log('winner')
        }
        changePlayer();
    }, { once: true })
});

function changePlayer () {
    if (board.classList[1] === X_CLASS) {
        board.classList.add(O_CLASS)
        board.classList.remove(X_CLASS)
    } else {
        board.classList.add(X_CLASS)
        board.classList.remove(O_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}