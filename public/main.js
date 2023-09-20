const allButtons = document.querySelectorAll('button');


displayCurrentStepInSidebar();

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigateSteps(button);
        } else {

        }
    });
});


