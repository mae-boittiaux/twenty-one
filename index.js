const output = document.getElementById('output');

const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const optionThree = document.getElementById('option-three');

const optionButtons = document.querySelectorAll('.option-button');

let total = 0;
let choiceComputer = 0;

const waitTime = 2000;

const outputUser = 'user-output';
const outputComputer = 'computer-output';

setOptionButtonText();

optionButtons.forEach(button => {
    button.onclick = () => {
        const choiceUser = calculateChoice((Number(button.textContent) - total));
        playTurn(outputUser, choiceUser);
        determineResult(choiceUser, true);

        choiceComputer = calculateChoice(getRandomInteger(1, 4));

        setTimeout(playComputerTurn, waitTime);
        setTimeout(setOptionButtonText, waitTime);
        setTimeout(determineButtonVisibility, waitTime);
    };
});

function setOptionButtonText() {
    optionOne.textContent = (total + 1);
    optionTwo.textContent = (total + 2);
    optionThree.textContent = (total + 3);
}

function createDiv(className, textContent) {
    const div = document.createElement('div');

    div.className = className;
    div.textContent = textContent;

    return div;
}

function playTurn(playerOutput, playerChoice) {
    const div = createDiv(playerOutput, playerChoice);
    output.append(div);
}

function playComputerTurn() {
    playTurn(outputComputer, choiceComputer);
    determineResult(choiceComputer, false);
}

function calculateChoice(playerChoice) {
    return total += playerChoice;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function determineResult(choice, isUserTurn) {
    if (choice >= 21) {
        if (isUserTurn) {
            playTurn(outputUser, 'I lose');
        } else {
            playTurn(outputComputer, 'You win');
        }
    }
}

function determineButtonVisibility() {
    optionButtons.forEach(button => {
        if (button.textContent > 21) { button.classList.add('hidden'); }
    });
}
