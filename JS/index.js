
document.querySelector("#close_button").addEventListener("click", function() {
    document.querySelector("#myForm").style.display = "none";
});

function saveRegistration() {
    // Get the values of the input fields
    var reg_username = document.querySelector("#reg_username").value;
    var reg_password = document.querySelector("#reg_password").value;

    // Save the information to local storage
    localStorage.setItem("username", reg_username);
    localStorage.setItem("password", reg_password);

    alert("Registration successful!");
    
}

function login() {
    // Get the values of the input fields
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    // Retrieve the information from local storage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if the entered information matches the stored information
    if (username === storedUsername && password === storedPassword) {
        // Redirect to homepage
        window.location.href = "./homepage.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}
document.querySelector("#create_button").addEventListener("click", function() {
    document.querySelector("#myForm").style.display = "block";
});


