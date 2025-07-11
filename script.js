document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;

            details.classList.toggle("hidden");

            if (details.classList.contains("hidden")) {
                button.textContent = "Show Details";

            } else {
                button.textContent = "Hide Details";
            }

        });
    });

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        if (name.value.trim() === " ") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else {
            nameError.textContent = "";
        }
        if (email.value.trim() === " ") {
            emailError.textContent = "Valid email required";
            isValid = false;
        } else if (!email.value.includes("@") || !email.value.includes(".")) {
            emailError.textContent = "Please enter a valid email";
            isValid = false;
        } else {
            emailError.textContent = " ";
        }

        if (message.value.trim() === " ") {
            messageError.textContent = "Please enter a message";
            isValid = false;

        } else {
            messageError.textContent = "";
        }

        if (isValid) {
            alert("Message sent successfully!");
            form.reset();

        }

    });

});

