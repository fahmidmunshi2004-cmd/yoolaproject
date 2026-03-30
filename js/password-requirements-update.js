//==================== password-requirements-update ========================//
document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const strengthWrapper = document.querySelector(".pass__label__character__full");
    const strengthItems = document.querySelectorAll(".pass__label");
    const rules = document.querySelectorAll(".pass__rules ul li");

    const alertBox = document.querySelector(".alert");

    if (!password || !confirmPassword) return;

    // validation rules //
    const getChecks = (val) => ([
        val.length >= 8,
        /[A-Z]/.test(val),
        /[a-z]/.test(val),
        /[0-9]/.test(val),
        /[^A-Za-z0-9]/.test(val)
    ]);

    // password input //
    password.addEventListener("input", () => {
        const checks = getChecks(password.value);
        const score = checks.filter(Boolean).length;

        // rules active //
        checks.forEach((check, i) => {
            rules[i]?.classList.toggle("active", check);
        });

        // strength bar //
        strengthItems.forEach((el, i) => {
            el.classList.toggle("active", i < score);
        });

        // full strong //
        strengthWrapper.classList.toggle("strong", score === checks.length);
    });

    // confirm password check //
    confirmPassword.addEventListener("input", () => {
        const isMatch =
            confirmPassword.value === password.value ||
            confirmPassword.value === "";

        if (isMatch) {
            alertBox.classList.add("max-h-0", "opacity-0", "overflow-hidden");
            alertBox.classList.remove("max-h-20", "opacity-100");
        } else {
            alertBox.classList.remove("max-h-0", "opacity-0");
            alertBox.classList.add("max-h-20", "opacity-100", "overflow-hidden");
        }
    });
});