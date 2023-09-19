const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const phoneNumberInput = document.querySelector('#phone-number-input');
const nameErrorMessage = document.querySelector('.name-error');
const emailErrorMessage = document.querySelector('.email-error');
const phoneNumberError = document.querySelector('.phone-number-error');

function validateForm() {
    let nameInputForm = document.forms["game-form"]["name"].value;
    let emailInputForm = document.forms["game-form"]["email"].value;
    let phoneNumberInputForm = document.forms["game-form"]["phone-number"].value;

    let numErrors = 0;

    if (nameInputForm == "") {
        showErrorForEmpty(nameInput);
        numErrors++;
    } else {
        successfulForm(nameInput);
    }

    if (emailInputForm == "") {
        showErrorForEmpty(emailInput);
        numErrors++;
    } else {
        successfulForm(emailInput);
    }

    if (phoneNumberInputForm == "") {
        showErrorForEmpty(phoneNumberInput);
        numErrors++;
    } else {
        successfulForm(phoneNumberInput);
    }

    if (numErrors > 0) {
        return false;
    }

    // successfulFormName();
    return true;
}

function showErrorForEmpty(element) {
    element.style.borderColor = 'hsl(354, 84%, 57%)';
    if (element === nameInput) {
        nameErrorMessage.innerHTML = 'This field is required';
    }
    if (element === emailInput) {
        emailErrorMessage.innerHTML = 'This field is required';
    }
    if (element === phoneNumberInput) {
        phoneNumberError.innerHTML = 'This field is required';
    }
}

function successfulForm(element) {
    element.style.borderColor = '';
    if (element === nameInput) {
        nameErrorMessage.innerHTML = '';
    }
    if (element === emailInput) {
        emailErrorMessage.innerHTML = '';
    }
    if (element === phoneNumberInput) {
        phoneNumberError.innerHTML = '';
    }
}