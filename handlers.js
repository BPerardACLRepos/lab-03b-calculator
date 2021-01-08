import { getSum, getDifference, getDividend, getProduct } from './utils.js';

const userInputOne = document.querySelector('#user-input-one');
const userInputTwo = document.querySelector('#user-input-two');
const userAnswerElement = document.querySelector('#answer');

export function myClickHandler(operator) {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        if (operator === '+') {
            const answer = getSum(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
            userAnswerElement.textContent = `Your answer is ${answer} & the answer to life is 42.`;
        } else if (operator === '-') {
            const answer = getDifference(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
            userAnswerElement.textContent = `Your answer is ${answer} & the answer to life is 42.`;
        } else if (operator === '/') {
            const answer = getDividend(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
            userAnswerElement.textContent = `Your answer is ${answer} & the answer to life is 42.`;
        } else if (operator === '*') {
            const answer = getProduct(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
            userAnswerElement.textContent = `Your answer is ${answer} & the answer to life is 42.`;
        }
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }

}
