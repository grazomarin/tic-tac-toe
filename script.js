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
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.querySelector('.winning-message')
const restartBtn = document.getElementById('restartButton')

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick = () => {
        if (cell.classList.length !== 2) {
            cell.classList.add(board.classList[1])
            if (checkWin(board.classList[1])) {
                endGame(false, board.classList[1]);
            } else if (isDraw()) {
                endGame(true)
            }
            changePlayer();
        }
    })
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

function isDraw() {
    if(
        [...cellElements].every(cell => {
            return cell.classList.length === 2
        })
    ) {return true}
}

function endGame (draw, player) {
    if (draw) {
        winningMessageTextElement.textContent = `It's a Draw!`
    } else {
        winningMessageTextElement.textContent = `${player.toUpperCase()} Wins!`
    }
    winningMessageElement.classList.add('show')
}

restartBtn.addEventListener('click', () => {
    board.classList = 'board x';
    cellElements.forEach(cell => cell.classList = 'cell')
    winningMessageElement.classList.remove('show')
})