let message;
function exit(){
    message = window.confirm("Are you sure you want to exit? All your details will be deleted.");
    document.getElementById("cancelButton").innerHTML = prompt.message;
}

function backMain(){
    getElementById("execBINI").innerHTML = window.location.assign("http://127.0.0.1:5500/main.html")
}

function validateSignIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username.trim() === "" || password.trim() === "") {
        alert("Username and Password are required.");
        return false; // Prevent form submission
    }

    
    return true; // Allow form submission
}

function validateSignUp() {
    let username = document.getElementById("newUsername").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let dob = document.getElementById("dOB").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" || dob.trim() === "") {
        alert("All fields are required.");
        return false; // Prevent form submission
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }
    
    return true; // Allow form submission
}
