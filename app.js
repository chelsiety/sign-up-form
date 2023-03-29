const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phoneNo');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('confirmPassword');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


function isValidEmail(emailEntered) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailEntered);
    
}

function isValidPhoneNumber(phoneNumberEntered) {
    const re = /^(?:\d{2}([-.])\d{3}\1\d{3}\1\d{3}|\d{11})$/gm; // RegEx for an 11-digit phone number
    return re.test(phoneNumberEntered);
}

function setError(inputElement, errorMessage) {
    const formInputContainer = inputElement.parentElement;
    const errorDisplay = formInputContainer.querySelector('.error');

    errorDisplay.textContent = errorMessage;

    formInputContainer.classList.add('error');  // Add red color to input field and error message
    formInputContainer.classList.remove('success');
}


function setSuccess(inputElement) {
    const formInputContainer = inputElement.parentElement;
    const errorDisplay = formInputContainer.querySelector('.error');

    errorDisplay.textContent = '';

    formInputContainer.classList.add('success');  // Add green color to input field
    formInputContainer.classList.remove('error');

}

function validateInputs() {
    // Get the value of all input fields
    // Use trim() to remove all the white spaces in the string input
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumValue = phoneNum.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();



    // Validation conditions

    // Display an error if required input field condition is not satisfied

    if (firstNameValue === '') {
        setError(firstName, 'First name cannot be blank');
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Last name cannot be blank');
    } else {
        setSuccess(lastName);
    }

    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Not a valid email address');
    }
    else {
        setSuccess(email);
    }

    if (phoneNumValue === '') {
        setError(phoneNum, 'Phone number cannot be blank');
    } else if (!isValidPhoneNumber(phoneNumValue)) {
        setError(phoneNum, 'Enter a valid 11-digit phone number');
    }
    else {
        setSuccess(phoneNum);
    }

    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password length must be at least 8 characters');
    }
    else {
        setSuccess(password);
    }

    if (passwordCheckValue === '') {
        setError(passwordCheck, 'Please confirm your password');
    } else if (passwordCheckValue !== passwordValue) {
        setError(passwordCheck, 'Password does not match');
    }
    else {
        setSuccess(passwordCheck);
    }
}












