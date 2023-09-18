const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        navigateSteps(button);
    });
});

function navigateSteps(button) {
    const firstStep = document.querySelector('.user-info-form-container');
    const secondStep = document.querySelector('.plan-selection-container');
    const thirdStep = document.querySelector('.pick-add-ons-container');
    const fourthStep = document.querySelector('.finishing-up-container');
    const fifthStep = document.querySelector('.thank-you-message-container');

    const allSteps = [firstStep, secondStep, thirdStep, fourthStep, fifthStep];
    let currentStepIndex = null
    allSteps.forEach((step, index) => {
        const computedStyle = getComputedStyle(step);
        if (computedStyle.display !== 'none') {
            currentStepIndex = index;
        }
    });

    if (button.innerHTML === 'Next Step' || button.innerHTML === 'Confirm') {
        const currentStep = allSteps[currentStepIndex];
        const nextStepIndex = currentStepIndex + 1;
        const nextStep = allSteps[nextStepIndex];

        currentStep.style.display = "none";
        if (nextStep === fifthStep) {
            nextStep.style.display = 'flex';
        } else {
            nextStep.style.display = 'block';
        }
    }

    if (button.innerHTML === 'Go Back') {
        const currentStep = allSteps[currentStepIndex];
        const previousStepIndex = currentStepIndex - 1;
        const previousStep = allSteps[previousStepIndex];

        currentStep.style.display = "none";
        previousStep.style.display = 'block';
    }
    console.log(currentStepIndex);
}

// navigateSteps();