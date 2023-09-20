function replaceClassName(element, oldClassName, newClassName) {
    // const element = document.getElementById(elementId);

    if (element) {
        const currentClasses = element.className.split(' ');
        console.log(currentClasses)

        // Check if the old class name exists in the classes array
        const index = currentClasses.indexOf(oldClassName);

        if (index !== -1) {
            // Replace the old class name with the new class name
            currentClasses[index] = newClassName;

            // Join the classes back together with a space and set it as the element's new class
            element.className = currentClasses.join(' ');
        }
    }
}

function hasClassName(element, classNameToCheck) {

    if (element) {
        const currentClasses = element.className.split(' ');

        // Check if the class name to check exists in the classes array
        return currentClasses.includes(classNameToCheck);
    }

    return false; // Return false if the element is not found
}

function toCamelCase(inputString) {
    return inputString.split(' ').map(function (word, index) {
        if (index === 0) {
            return word.toLowerCase(); // First word should be in lowercase
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');
}