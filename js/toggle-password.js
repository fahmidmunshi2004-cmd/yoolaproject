//======================= toggle password =======================//
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll("#togglePassword");
    toggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const wrapper = btn.closest(".relative");
            const input = wrapper.querySelector("input");
            const eyeOpen = btn.querySelector(".show__password");
            const eyeClose = btn.querySelector(".hide__password");
            if (!input) return;
            const isPassword = input.type === "password";
            input.type = isPassword ? "text" : "password";
            eyeOpen.classList.toggle("hidden");
            eyeClose.classList.toggle("hidden");
        });
    });
});

