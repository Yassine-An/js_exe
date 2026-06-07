const container = document.getElementById('grid-container');
const resizeBtn = document.getElementById('resize-btn');
const clearBtn = document.getElementById('clear-btn');
function createGrid(squaresPerSide) {
    container.innerHTML = '';
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSizePercentage = 100 / squaresPerSide;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.flexBasis = `${squareSizePercentage}%`;
        square.style.height = `${squareSizePercentage}%`;
        square.addEventListener('mouseenter', () => {
            square.classList.add('colored');
        });

        container.appendChild(square);
    }
}
createGrid(16);
resizeBtn.addEventListener('click', () => {
    let userInput = prompt('أدخل عدد المربعات لكل جانب (الحد الأقصى 100): \nEnter number of squares per side (Max 100):');
    if (userInput === null) return;
    let squaresPerSide = parseInt(userInput);
    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert('رجاءً أدخل رقماً صحيحاً بين 1 و 100 فقط! \nPlease enter a valid number between 1 and 100.');
    } else {
        createGrid(squaresPerSide);
    }
});
clearBtn.addEventListener('click', () => {
    const coloredSquares = document.querySelectorAll('.grid-square.colored');
    coloredSquares.forEach(square => {
        square.classList.remove('colored');
    });
});