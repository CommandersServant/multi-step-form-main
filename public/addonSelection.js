const onlineServiceAddon = document.querySelector('.online-service-add-on');
const largerStorageAddon = document.querySelector('.larger-storage-add-on');
const customizableProfileAddon = document.querySelector('.customizable-profile-add-on');

const addons = [onlineServiceAddon, largerStorageAddon, customizableProfileAddon];

const onlineServiceCheckbox = document.querySelector(".online-service-add-on .checkbox");

const addonPrices = {
    priceElements: {
        onlineServices: document.querySelector(".online-service-add-on-price"),
        largerStorage: document.querySelector(".larger-storage-add-on-price"),
        customizableProfile: document.querySelector(".customizable-profile-add-on-price")
    },
    monthly: {
        onlineServices: 1,
        largerStorage: 2,
        customizableProfile: 2
    },
    yearly: {
        onlineServices: 10,
        largerStorage: 20,
        customizableProfile: 20
    }
}
// console.log(addonPrices.priceElements.onlineServices)

function setPrices() {
    if (yearlyOrMonthlyPicker.checked) {
        addonPrices.priceElements.onlineServices.innerHTML = stringPrice(addonPrices.yearly.onlineServices, "yearly");
        addonPrices.priceElements.largerStorage.innerHTML = stringPrice(addonPrices.yearly.largerStorage, "yearly");
        addonPrices.priceElements.customizableProfile.innerHTML = stringPrice(addonPrices.yearly.customizableProfile, "yearly");
    } else {
        addonPrices.priceElements.onlineServices.innerHTML = stringPrice(addonPrices.monthly.onlineServices, "monthly");
        addonPrices.priceElements.largerStorage.innerHTML = stringPrice(addonPrices.monthly.largerStorage, "monthly");
        addonPrices.priceElements.customizableProfile.innerHTML = stringPrice(addonPrices.monthly.customizableProfile, "monthly");
    }
    
}

addons.forEach(addon => {
    addon.addEventListener('click', () => {

        if (hasClassName(addon, 'unselected')) {
            replaceClassName(addon, 'unselected', 'selected');
            const checkboxClass = "." + addon.classList[0] + " .checkbox";
            const checkbox = document.querySelector(checkboxClass)
            checkbox.checked = true;
        } else {
            replaceClassName(addon, 'selected', 'unselected');
            const checkboxClass = "." + addon.classList[0] + " .checkbox";
            const checkbox = document.querySelector(checkboxClass)
            checkbox.checked = false;
        }
    })
});

