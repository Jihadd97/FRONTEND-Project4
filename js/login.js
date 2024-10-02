let loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let rememberMe = document.querySelector("#rememberMe").checked;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let storedFirstName = localStorage.getItem("firstName")

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username",storedFirstName); // Assuming username is stored as email
         // Check if "Remember me" is checked
         if (rememberMe) {
            // Store a flag indicating the user chose to be remembered
            localStorage.setItem("rememberMe", "true");
        } else {
            // Remove the flag if "Remember me" is not checked
            localStorage.removeItem("rememberMe");
        }
        alert("Login successful!");
    setTimeout(() => {
        window.location = "index.html";
    }, 300); 
    } else {
        alert("Incorrect email or password.");
    }
});
