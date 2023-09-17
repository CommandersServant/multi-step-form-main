const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
    });
});

function navigateSteps() {
    const firstStep = document.querySelector('.user-info-form-container');
    const secondStep = document.querySelector('.plan-selection-container');
    const thirdStep = document.querySelector('.pick-add-ons-container');
    const fourthStep = document.querySelector('.finishing-up-container');
    const fifthStep = document.querySelector('.thank-you-message-container');

    const allSteps = [firstStep, secondStep, thirdStep, fourthStep, fifthStep];
    

    console.log(allSteps);
}

navigateSteps();