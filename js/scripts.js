const form = document.querySelector("form[name='contact-form']");
const thankYou = document.querySelector(".thank-you");
const firstName = document.querySelector("input[name='firstName']");

let isFormValid = false;

const validateInputs = () => {
    firstName.classList.remove("invalid");
    firstName.nextElementSibling.classList.add("hidden");
    isFormValid = true;

    if (!firstName.value) {
        firstName.classList.add("invalid");
        firstName.nextElementSibling.classList.remove("hidden");
        isFormValid = false;
    }
};    

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

firstName.addEventListener("input", () => {
    validateInputs();
});