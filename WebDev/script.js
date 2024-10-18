document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Clear any previous message
    message.textContent = "";

    // Basic validation for matching passwords
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    // Simulate success (this is where you would typically send data to the server)
    // You can replace the following lines with an actual API call to register the user
    setTimeout(() => {
        // Simulate a successful response
        alert("Sign up successful! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to the login page
    }, 1000);
});
