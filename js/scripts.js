const form = document.querySelector("form[name='contact-form']");
const firstNameInput = document.querySelector("input[name='firstName']");
const lastNameInput = document.querySelector("input[name='lastName']");
const phoneInput = document.querySelector("input[name='telephone']");
const emailInput = document.querySelector("input[name='email']");
const thankYou = document.querySelector(".thank-you");

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
  
const isValidPhone = (telephone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(telephone).toLowerCase());
};
 

firstNameInput.isValid = () => !!firstNameInput.value;
lastNameInput.isValid = () => !!lastNameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);

const inputs = [firstNameInput, lastNameInput, emailInput, phoneInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!firstName.value) {
        isFormValid = false;
        invalidateElm(firstName);
    }
    if (!lastName.value) {
        isFormValid = false;
        invalidateElm(lastName);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }
    if (!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invalidateElm(phoneInput);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validateInputs();
    });
});
