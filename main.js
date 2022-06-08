const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
}); 

const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector(".invalid")
    ;
    const iconDisplay = formControl.querySelector(".invalid-icon");

    errorDisplay.innerText = message;
    formControl.classList.add("invalid");
    iconDisplay.style.visibility = "visible";
    formControl.classList.remove("success");
    
}

const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector(".invalid");
    const iconDisplay = formControl.querySelector(".invalid-icon");

    errorDisplay.innerText = '';
    formControl.classList.add("success");
    iconDisplay.style.visibility = "hidden";
    formControl.classList.remove("invalid");
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue === "") {
        setError(firstname, "First name cannot be empty");
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === "") {
        setError(lastname, "Last name cannot be empty");
    } else {
        setSuccess(lastname);
    }

    if (emailValue === "") {
        setError(email, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Looks like this is not an email");
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
};
