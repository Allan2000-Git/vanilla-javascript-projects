const computerChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('your-choice');
const result = document.getElementById('result');

const allChoices = document.querySelectorAll('button');

allChoices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        yourChoice.textContent = e.target.textContent;
        const compChoice = generateComputerChoice();
        result.textContent = compareChoices(yourChoice.textContent, compChoice);
    });
});

function generateComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * allChoices.length);
    let compChoice = computerChoices[randomNumber];
    computerChoice.textContent = compChoice;
    return compChoice;
} 

function compareChoices(yourChoice, compChoice) {
    if (yourChoice === compChoice) {
        return 'Draw!';
    } else if (yourChoice === 'Rock' && compChoice === 'Scissors') {
        return 'You Win!';
    } else if (yourChoice === 'Paper' && compChoice === 'Rock') {
        return 'You Win!';
    } else if (yourChoice === 'Scissors' && compChoice === 'Paper') {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}