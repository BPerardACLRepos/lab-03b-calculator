const userInputOne = document.querySelector('#user-input-one');
const userInputTwo = document.querySelector('#user-input-two');
const additionButton = document.querySelector('#addition');
const subtractionButton = document.querySelector('#subtraction');
const divisionButton = document.querySelector('#division');
const multiplicationButton = document.querySelector('#multiplication');
const userAnswer = document.querySelector('#answer');

additionButton.addEventListener('click', () => {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const mathIsPower = userInputOne.valueAsNumber + userInputTwo.valueAsNumber;
        userAnswer.textContent = `Your answer is ${mathIsPower} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
});

subtractionButton.addEventListener('click', () => {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const mathIsPower = userInputOne.valueAsNumber - userInputTwo.valueAsNumber;
        userAnswer.textContent = `Your answer is ${mathIsPower} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
});

divisionButton.addEventListener('click', () => {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const mathIsPower = userInputOne.valueAsNumber / userInputTwo.valueAsNumber;
        userAnswer.textContent = `Your answer is ${mathIsPower} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
});

multiplicationButton.addEventListener('click', () => {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const mathIsPower = userInputOne.valueAsNumber * userInputTwo.valueAsNumber;
        userAnswer.textContent = `Your answer is ${mathIsPower} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
});