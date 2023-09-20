const arcadePlan = document.querySelector('#plan-arcade');
const advancedPlan = document.querySelector('#plan-advanced');
const proPlan = document.querySelector('#plan-pro');
const yearlyOrMonthlyPicker = document.querySelector('input[type="checkbox"]');

const allPlans = [arcadePlan, advancedPlan, proPlan];

allPlans.forEach(plan => {
    plan.addEventListener('click', () => {

        // console.log(yearlyOrMonthlyPicker.value);
        allPlans.forEach(plan2 => {
            if (plan2 !== plan) {
                if (hasClassName(plan2, 'selected')) {
                    replaceClassName(plan2, 'selected', 'unselected');
                }
            }
        })

        if (hasClassName(plan, 'unselected')) {
            replaceClassName(plan, 'unselected', 'selected');
        }

    })
})

yearlyOrMonthlyPicker.addEventListener('click', showYearlyFreeMonths)


function showYearlyFreeMonths() {
    const yearlyFreeMonths = {
        className: 'yearly-free-months',
        content: "2 months free"
    }

    if (yearlyOrMonthlyPicker.checked) {
        allPlans.forEach(plan => {
            const yearlyFreeMonthDiv = document.createElement("div");
            yearlyFreeMonthDiv.className = yearlyFreeMonths.className;
            yearlyFreeMonthDiv.textContent = yearlyFreeMonths.content;
            plan.appendChild(yearlyFreeMonthDiv);
            // plan.appendChild("")
        })
        console.log('Yearly');
    } else {
        allPlans.forEach(plan => {
            const yearlyFreeMonthDiv = document.querySelector('.' + yearlyFreeMonths.className);
            plan.removeChild(yearlyFreeMonthDiv)
        })
        console.log('monthly');
    }
}

