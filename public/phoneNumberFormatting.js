function formatPhoneNumber(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue = format(value); // Format the phone number
    input.value = formattedValue;
}

// Function to format the phone number in (XXX) XXX-XXXX format
function format(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Add input event listener to the phone number input
