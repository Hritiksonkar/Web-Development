const form = document.querySelector("form");
const nm = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const hide = document.getElementById("hide");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameOk = nm.value.trim().length >= 2;

    if (!nameOk) {
        hide.style.display = "block";
        nm.focus();
        return;
    } else {
        hide.style.display = "none";
    }

    // Optional: basic extra checks (keep/remove as you like)
    const emailOk = email.value.trim().includes("@");
    const passwordOk = password.value.length >= 6;

    if (!emailOk) {
        alert("Please enter a valid email.");
        email.focus();
        return;
    }
    if (!passwordOk) {
        alert("Password should be at least 6 characters.");
        password.focus();
        return;
    }

    // If all good:
    form.submit();
});