let registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    // Save user information in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("username", email); // Assuming username is stored as email

    alert("Registration successful!");
    setTimeout(function () {
        window.location.href = "login.html";
    }, 100); // 500ms delay
});
