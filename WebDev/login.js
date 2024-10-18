document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with your actual authentication logic)
    if (username === 'admin' && password === 'password') {
        // Redirect to the exam page upon successful login
        window.location.href = 'index.html'; // Adjust the URL if needed
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
