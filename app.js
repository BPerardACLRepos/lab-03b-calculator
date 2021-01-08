import { myAdditionHandler, myDivisionHandler, myMultiplicationHandler, mySubtractionHandler } from './handlers.js';

const additionButton = document.querySelector('#addition');
const subtractionButton = document.querySelector('#subtraction');
const divisionButton = document.querySelector('#division');
const multiplicationButton = document.querySelector('#multiplication');

additionButton.addEventListener('click', myAdditionHandler);
subtractionButton.addEventListener('click', mySubtractionHandler)
divisionButton.addEventListener('click', myDivisionHandler);
multiplicationButton.addEventListener('click', myMultiplicationHandler);