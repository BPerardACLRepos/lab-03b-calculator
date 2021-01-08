import { myClickHandler } from './handlers.js';

const calculatorButtons = document.querySelector('#calculator-buttons');

calculatorButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const operator = e.target.textContent;
        myClickHandler(operator);
    }
});