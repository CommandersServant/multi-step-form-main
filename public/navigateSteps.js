function getCurrentStep() {
    let currentStepIndex = null;

    allSteps.forEach((step, index) => {
        const computedStyle = getComputedStyle(step);
        if (computedStyle.display !== 'none') {
            currentStepIndex = index;
        }
    });

    return currentStepIndex
}

function navigateSteps(button) {
    const currentStepIndex = getCurrentStep();

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

        updateCurrentStepInSidebarNext()
    }

    if (button.innerHTML === 'Go Back') {
        const currentStep = allSteps[currentStepIndex];
        const previousStepIndex = currentStepIndex - 1;
        const previousStep = allSteps[previousStepIndex];

        currentStep.style.display = "none";
        previousStep.style.display = 'block';
        updateCurrentStepInSidebarBack();
    }
    console.log(currentStepIndex);
}

function displayCurrentStepInSidebar() {
    const stepNumber = '.step-' + (getCurrentStep() + 1).toString();
    const stepNumberDiv = document.querySelector(stepNumber);
    stepNumberDiv.style.backgroundColor = 'hsl(206, 94%, 87%)';
    stepNumberDiv.style.border = 'none';
    stepNumberDiv.style.color = 'hsl(213, 96%, 18%)';
}

function updateCurrentStepInSidebarNext() {
    const currentStepNumber = '.step-' + (getCurrentStep()).toString();
    const nextStepNumber = '.step-' + (getCurrentStep() + 1).toString();
    const currentStepNumberDiv = document.querySelector(currentStepNumber);
    const nextStepNumberDiv = document.querySelector(nextStepNumber);
    currentStepNumberDiv.style.backgroundColor = '';
    currentStepNumberDiv.style.border = '';
    currentStepNumberDiv.style.color = '';
    nextStepNumberDiv.style.backgroundColor = 'hsl(206, 94%, 87%)';
    nextStepNumberDiv.style.border = 'none';
    nextStepNumberDiv.style.color = 'hsl(213, 96%, 18%)';
}

function updateCurrentStepInSidebarBack() {
    const currentStepNumber = '.step-' + (getCurrentStep() + 1).toString();
    const previousStepNumber = '.step-' + (getCurrentStep() + 2).toString();
    const currentStepNumberDiv = document.querySelector(currentStepNumber);
    const previousStepNumberDiv = document.querySelector(previousStepNumber);
    currentStepNumberDiv.style.backgroundColor = 'hsl(206, 94%, 87%)';
    currentStepNumberDiv.style.border = 'none';
    currentStepNumberDiv.style.color = 'hsl(213, 96%, 18%)';
    previousStepNumberDiv.style.backgroundColor = '';
    previousStepNumberDiv.style.border = '';
    previousStepNumberDiv.style.color = '';
}