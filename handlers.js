import { getSum, getDifference, getDividend, getProduct } from './utils.js';

const userInputOne = document.querySelector('#user-input-one');
const userInputTwo = document.querySelector('#user-input-two');
const userAnswerElement = document.querySelector('#answer');

export function myAdditionHandler() {
    console.log('yo');
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const sum = getSum(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
        console.log(sum);
        userAnswerElement.textContent = `Your answer is ${sum} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
}

export function mySubtractionHandler() {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const difference = getDifference(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
        userAnswerElement.textContent = `Your answer is ${difference} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
}

export function myDivisionHandler() {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const dividend = getDividend(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
        userAnswerElement.textContent = `Your answer is ${dividend} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
}

export function myMultiplicationHandler() {
    if (userInputOne.valueAsNumber && userInputTwo.valueAsNumber) {
        const product = getProduct(userInputOne.valueAsNumber, userInputTwo.valueAsNumber);
        userAnswerElement.textContent = `Your answer is ${product} & the answer to life is 42.`;
        userInputOne.value = '';
        userInputTwo.value = '';
    } else {
        alert(`What's the sound of one hand clapping? Please enter two numbers.`)
    }
}