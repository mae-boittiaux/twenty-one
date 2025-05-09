const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const optionThree = document.getElementById('option-three');

const output = document.getElementById('output');

let total = 0;

optionOne.textContent = '1';
optionTwo.textContent = '2';
optionThree.textContent = '3';

optionOne.onclick = () => {
    output.append((total += Number(optionOne.textContent)) + ", ");
};
optionTwo.onclick = () => {
    output.append((total += Number(optionTwo.textContent)) + ", ");
};
optionThree.onclick = () => {
    output.append((total += Number(optionThree.textContent)) + ", ");
};
