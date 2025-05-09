const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const optionThree = document.getElementById('option-three');

const output = document.getElementById('output');

let total = 0;

optionOne.textContent = '1';
optionTwo.textContent = '2';
optionThree.textContent = '3';

optionOne.onclick = () => {
    const div = document.createElement('div');
    div.className = 'user-output';
    div.textContent = (total += Number(optionOne.textContent));

    output.append(div);
};
optionTwo.onclick = () => {
    const div = document.createElement('div');
    div.className = 'user-output';
    div.textContent = (total += Number(optionTwo.textContent));

    output.append(div);
};
optionThree.onclick = () => {
    const div = document.createElement('div');
    div.className = 'user-output';
    div.textContent = (total += Number(optionThree.textContent));

    output.append(div);
};
