const password = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClose = document.getElementById("eyeClose");

toggleBtn.addEventListener("click", () => {
    const isPassword = password.type === "password";

    password.type = isPassword ? "text" : "password";

    eyeOpen.classList.toggle("hidden");
    eyeClose.classList.toggle("hidden");
});