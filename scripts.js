
const emailInput = document.getElementById("email");
const emailSubmit = document.getElementById("email-submit-button");

const validateEmail = () => {
    let email = document.forms["emailForm"]["email"].value;
    if (email == ""){
        invalidEmailMessage();
        return false;
    } else {
        successfulSubmission(email);
        //return true;
    }
}

const successfulSubmission = (email) => {
    const successConfirmation = document.getElementById("success-confirmation");
    const mainContainer = document.getElementById("main-submission");
    successConfirmation.style.display = "initial";
    mainContainer.style.opacity = "20%";
    disableElement(emailInput);
    disableElement(emailSubmit);
    document.querySelector(".email-name").innerHTML = email;
}

const dismissMessageButton = () => {
    document.getElementById("success-confirmation").style.display = "none";
    document.getElementById("main-submission").style.opacity = "100%";
    enableElement(emailInput);
    enableElement(emailSubmit);
}



const invalidEmailMessage = () => {
 const invalidMessage = document.querySelector(".invalid-message");
 const emailForm = document.querySelector(".input");
 invalidMessage.innerHTML = "Valid E-mail required";
 emailForm.style.backgroundcolor = "hsl(4,100%,67%)";
}

const disableElement = (el) => {
    el.disabled = true;
}

const enableElement = (el) => {
    el.disabled = false;
}