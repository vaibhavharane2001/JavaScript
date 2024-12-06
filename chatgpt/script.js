let score = 0;
let wickets = 0;
const maxWickets = 3;

const scoreElement = document.getElementById('score');
const wicketsElement = document.getElementById('wickets');
const resultElement = document.getElementById('result');
const batButton = document.getElementById('batButton');
const resetButton = document.getElementById('resetButton');

batButton.addEventListener('click', () => {
    if (wickets < maxWickets) {
        const run = Math.floor(Math.random() * 7); // Random number between 0 and 6
        if (run === 0) {
            wickets++;
            resultElement.textContent = "Oh no! You're out!";
        } else {
            score += run;
            resultElement.textContent = `You scored ${run} runs!`;
        }
        updateScoreboard();
    }

    if (wickets === maxWickets) {
        resultElement.textContent = `Game Over! Your final score is ${score}.`;
        batButton.classList.add('hidden');
        resetButton.classList.remove('hidden');
    }
});

resetButton.addEventListener('click', () => {
    score = 0;
    wickets = 0;
    updateScoreboard();
    resultElement.textContent = '';
    batButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
});

function updateScoreboard() {
    scoreElement.textContent = score;
    wicketsElement.textContent = wickets;
}
