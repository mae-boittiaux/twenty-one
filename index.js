const output = document.getElementById('output');
const optionButtons = document.querySelectorAll('.option-button');

let total = 0;

setOptionButtonText();

optionButtons.forEach(button => {
    button.onclick = () => {
        const div = createDiv('user-output', (total += (Number(button.textContent) - total)));
        output.append(div);

        const computerResponse = createDiv('computer-output', (total += getRandomInteger(1, 4)));
        output.append(computerResponse);
        setOptionButtonText();
    };
});

function setOptionButtonText() {
    const optionOne = document.getElementById('option-one');
    const optionTwo = document.getElementById('option-two');
    const optionThree = document.getElementById('option-three');

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

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
