const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const optionThree = document.getElementById('option-three');

const output = document.getElementById('output');

optionOne.textContent = '1';
optionTwo.textContent = '2';
optionThree.textContent = '3';

optionOne.onclick = () => {
    output.append(optionOne.textContent);
};
optionTwo.onclick = () => {
    output.append(optionTwo.textContent);
};
optionThree.onclick = () => {
    output.append(optionThree.textContent);
};
