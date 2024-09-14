document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const isValid = validateForm(); // Check if form is valid

    if (isValid) {
        alert('Form submitted successfully');
        // You can perform additional actions here, such as submitting via AJAX.
    }
});

function validateForm() {
    // Get all form elements
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true; // Flag to track form validity

    // Validate Full Name
    if (fullName.length < 5) {
        setError('fullName', 'Name must be at least 5 characters long');
        isValid = false;
    } else {
        setSuccess('fullName');
    }

    // Validate Email
    if (!email.includes('@')) {
        setError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        setSuccess('email');
    }

    // Validate Phone Number
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        setError('phone', 'Phone number must be 10 digits and not be 123456789');
        isValid = false;
    } else {
        setSuccess('phone');
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
        setError('password', 'Password must be at least 8 characters and cannot be "password" or your name');
        isValid = false;
    } else {
        setSuccess('password');
    }

    // Validate Confirm Password
    if (confirmPassword !== password) {
        setError('confirmPassword', 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess('confirmPassword');
    }

    return isValid; // Return the overall form validity status
}

// Function to set error message and highlight the input field red
function setError(elementId, message) {
    const element = document.getElementById(elementId);
    element.classList.add('is-invalid');
    element.classList.remove('is-valid'); // Remove valid class if present
    element.nextElementSibling.textContent = message; // Set the error message
}

// Function to mark the input field as valid and highlight green
function setSuccess(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('is-invalid'); // Remove error class if present
    element.classList.add('is-valid'); // Add valid class to highlight green
}
