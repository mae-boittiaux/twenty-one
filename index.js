const output = document.getElementById('output');
const optionButtons = document.querySelectorAll('.option-button');

let total = 0;

setOptionButtonText();

optionButtons.forEach(button => {
    button.onclick = () => {
        const div = document.createElement('div');
        div.className = 'user-output';
        div.textContent = (total += Number(button.textContent));

        output.append(div);
    };
});

function setOptionButtonText() {
    const optionOne = document.getElementById('option-one');
    const optionTwo = document.getElementById('option-two');
    const optionThree = document.getElementById('option-three');

    optionOne.textContent = '1';
    optionTwo.textContent = '2';
    optionThree.textContent = '3';
}
