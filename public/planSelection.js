const arcadePlan = document.querySelector('#plan-arcade');
const advancedPlan = document.querySelector('#plan-advanced');
const proPlan = document.querySelector('#plan-pro');
const yearlyOrMonthlyPicker = document.querySelector('input[type="checkbox"]');

const allPlans = [arcadePlan, advancedPlan, proPlan];

const planPrices = {
    priceElements: {
        arcade: document.querySelector(".arcade-plan-price"),
        advanced: document.querySelector(".advanced-plan-price"),
        pro: document.querySelector(".pro-plan-price")
    },
    monthly: {
        arcade: 9,
        advanced: 12,
        pro: 15
    },
    yearly: {
        arcade: 90,
        advanced: 120,
        pro: 150
    },
}

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


function showYearlyFreeMonthsAndPrices() {
    const yearlyFreeMonths = {
        className: 'yearly-free-months',
        content: "2 months free"
    }

    if (yearlyOrMonthlyPicker.checked) {
        console.log(planPrices.priceElements.arcade.innerHTML)
        planPrices.priceElements.arcade.innerHTML = stringPrice(planPrices.yearly.arcade, "yearly");
        planPrices.priceElements.advanced.innerHTML = stringPrice(planPrices.yearly.advanced, "yearly");
        planPrices.priceElements.pro.innerHTML = stringPrice(planPrices.yearly.pro, "yearly");
        allPlans.forEach(plan => {
            const yearlyFreeMonthDiv = document.createElement("div");
            yearlyFreeMonthDiv.className = yearlyFreeMonths.className;
            yearlyFreeMonthDiv.textContent = yearlyFreeMonths.content;
            plan.appendChild(yearlyFreeMonthDiv);
        })
        // console.log('Yearly');
    } else {
        planPrices.priceElements.arcade.innerHTML = stringPrice(planPrices.monthly.arcade, "monthly");
        planPrices.priceElements.advanced.innerHTML = stringPrice(planPrices.monthly.advanced, "monthly");
        planPrices.priceElements.pro.innerHTML = stringPrice(planPrices.monthly.pro, "monthly");
        allPlans.forEach(plan => {
            const yearlyFreeMonthDiv = document.querySelector('.' + yearlyFreeMonths.className);
            plan.removeChild(yearlyFreeMonthDiv)
        })
        // console.log('monthly');
    }
}

function stringPrice(price, planDuration) {
    if (planDuration === "yearly") {
        return `$${price}/yr`;
    }
    if (planDuration === "monthly") {
        return `$${price}/mo`;
    }
    return
}
