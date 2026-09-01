
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const passwordToggle = document.getElementById("passwordToggle");

if (passwordToggle) {
    passwordToggle.addEventListener("click", () => {
        const password = document.getElementById("password");

        if (password.type === "password") {
            password.type = "text";
            passwordToggle.innerText = "Hide";
        } 
        
        else {
            password.type = "password";
            passwordToggle.innerText = "Show";
        }
    });
}

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            name,
            email,
            phone,
            password
        };

        localStorage.setItem("vetnestUser", JSON.stringify(user));
        alert("Account created successfully!");

        window.location.href = "owner-dashboard.html";
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const savedUser = JSON.parse(localStorage.getItem("vetnestUser"));

        if (!savedUser) {
            alert("No account found. Please register first.");
            return;
        }

        if (email !== savedUser.email || password !== savedUser.password) {
            alert("Invalid email or password.");
            return;
        }

        localStorage.setItem("vetnestLoggedIn", "true");
        window.location.href = "owner-dashboard.html";
    });
}
