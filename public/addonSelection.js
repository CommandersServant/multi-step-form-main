const onlineServiceAddon = document.querySelector('.online-service-add-on');
const largerStorageAddon = document.querySelector('.larger-storage-add-on');
const customizableProfileAddon = document.querySelector('.customizable-profile-add-on');

const addons = [onlineServiceAddon, largerStorageAddon, customizableProfileAddon];

const onlineServiceCheckbox = document.querySelector(".online-service-add-on .checkbox");

const addonPrices = {
    monthly: {
        onlineServices: 1,
        largerStorage: 2,
        customizable: 2
    },
    yearly: {
        onlineServices: 10,
        largerStorage: 20,
        customizable: 20
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

