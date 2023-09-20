const allSelections = {
    planPicked: "",
    planDuration: "",
    addons: [],
    prices: {
        planPrice: null,
        addonPrices: {}
    },

    getAllSelections() {
        this.planPicked = document.querySelector('.plan.selected h3').textContent.toLowerCase();
        if (yearlyOrMonthlyPicker.checked) {
            this.planDuration = "yearly";
        } else {
            this.planDuration = "monthly";
        }
        const allSelectedAddons = document.querySelectorAll(".add-on.selected h4");
        allSelectedAddons.forEach(element => {
            this.addons.push(element.textContent);
        })
        if (this.planPicked && this.planDuration) {
            this.prices.planPrice = planPrices[this.planDuration][this.planPicked];
        }
        if (this.addons && this.planDuration) {
            this.addons.forEach(addon => {
                this.prices.addonPrices[addon] = addonPrices[this.planDuration][toCamelCase(addon)];
        })
        }
    }
}
