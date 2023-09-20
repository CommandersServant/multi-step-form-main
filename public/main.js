const allButtons = document.querySelectorAll('button');


displayCurrentStepInSidebar();

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        allSelections.getAllSelections()
        console.log(allSelections)
        if (validateForm()) {
            navigateSteps(button);
        } else {

        }
    });
});

yearlyOrMonthlyPicker.addEventListener('click', () => {
    showYearlyFreeMonthsAndPrices();
    setPrices();
})

// console.log(document.querySelectorAll('.add-on.unselected h4'))

