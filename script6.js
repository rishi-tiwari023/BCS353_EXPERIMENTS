function validateForm() {
    // Get form fields
    const nameField = document.querySelector('input[placeholder="Enter your name here.."]');
    const passwordField = document.querySelector('input[placeholder="Enter your password here.."]');
    let isValid = true;
    let errorMessage = "";

    // Validate Name
    const name = nameField.value.trim();
    if (!/^[a-zA-Z\s]{6,}$/.test(name)) {
        errorMessage += "Name must contain only alphabets and should be at least 6 characters long.\n";
        isValid = false;
    }

    // Validate Password
    const password = passwordField.value.trim();
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
        isValid = false;
    }

    // Display error message or submit form
    if (!isValid) {
        alert(errorMessage);
    }
    return isValid; // Prevent form submission if validation fails
}