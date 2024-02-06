function toggleForm() {
    event.preventDefault();
	
    var signInForm = document.getElementById("signInForm");
    var loginForm = document.getElementById("loginForm");

    signInForm.classList.toggle("hidden");
    loginForm.classList.toggle("hidden");
}

