const allButtons = document.querySelectorAll('button');

const firstStep = document.querySelector('.user-info-form-container');
const secondStep = document.querySelector('.plan-selection-container');
const thirdStep = document.querySelector('.pick-add-ons-container');
const fourthStep = document.querySelector('.finishing-up-container');
const fifthStep = document.querySelector('.thank-you-message-container');

const phoneNumberInput = document.querySelector('#phone-number-input');


const allSteps = [firstStep, secondStep, thirdStep, fourthStep, fifthStep];


displayCurrentStepInSidebar();

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        navigateSteps(button);
    });
});

phoneNumberInput.addEventListener('input', formatPhoneNumber);


