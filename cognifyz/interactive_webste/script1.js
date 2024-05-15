function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var valid = true;

    // Validate name
    if (name.trim() === "") {
        document.getElementById('name').classList.add('input-error');
        document.getElementById('name-error').textContent = "Name must be filled out";
        valid = false;
    } else {
        document.getElementById('name').classList.remove('input-error');
        document.getElementById('name-error').textContent = "";
    }

    // Validate email
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('input-error');
        document.getElementById('email-error').textContent = "Invalid email address";
        valid = false;
    } else {
        document.getElementById('email').classList.remove('input-error');
        document.getElementById('email-error').textContent = "";
    }

    // Validate message
    if (message.trim() === "") {
        document.getElementById('message').classList.add('input-error');
        document.getElementById('message-error').textContent = "Message must be filled out";
        valid = false;
    } else {
        document.getElementById('message').classList.remove('input-error');
        document.getElementById('message-error').textContent = "";
    }

    // If all validations pass, return true to submit the form
    return valid;
}

// Add event listeners to inputs to remove input-error class and error messages on input change
document.getElementById('name').addEventListener('input', function () {
    this.classList.remove('input-error');
    document.getElementById('name-error').textContent = "";
});

document.getElementById('email').addEventListener('input', function () {
    this.classList.remove('input-error');
    document.getElementById('email-error').textContent = "";
});

document.getElementById('message').addEventListener('input', function () {
    this.classList.remove('input-error');
    document.getElementById('message-error').textContent = "";
});
