function validateForm() {
    // Get all input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const feedback = document.getElementById('feedback').value;
    const satisfaction = document.getElementById('satisfaction').value;
    // Check if all fields are filled
    if (!name || !age || !gender || !feedback || !satisfaction) {
        alert("Please fill in all required fields.");
        return false;
    }
    // Check if the age is within a valid range
    if (age < 18 || age > 100) {
        alert("Please enter a valid age between 18 and 100.");
        return false;
    }
    alert("Survey submitted successfully!");
    return true;
}