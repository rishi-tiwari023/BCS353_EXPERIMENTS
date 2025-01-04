function validateRegistrationForm() {
    // Get the form inputs
    const emailInput = document.querySelector('input[placeholder="Enter your Email here .."]');
    const phoneInput = document.querySelector('input[placeholder="Enter Mobile Number"]');
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regular expression for phone number validation
    const phoneRegex = /^\d{10}$/;

    // Validate email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., name@domain.com).");
        emailInput.focus();
        return false;
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        phoneInput.focus();
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}
