
const playAgainButton = document.getElementById('a');
playAgainButton.addEventListener('click', () => {
    window.location.href = 'game.html';
});

const score = localStorage.getItem("score");

const scoreElement = document.getElementById("score");
scoreElement.textContent = score;

