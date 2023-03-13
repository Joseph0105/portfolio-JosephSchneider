// Valider email
function ValidateEmail(event) {
  event.preventDefault();
  const emailInput = document.querySelector(".email-input");
  const emailError = document.querySelector(".email-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const email = emailInput.value;
  if (email === "") {
    emailError.textContent = "Veuillez ajouter votre adresse mail";
    emailInput.classList.add("validation-error");
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Votre adresse mail n'est pas valide";
    emailInput.classList.add("validation-error");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("validation-error");
    const isValid = validatetext();
    if (isValid) {
      event.target.submit();
    }
  }
}

// Valider sujet et message
function validatetext() {
  const subjectInput = document.querySelector(".subject-input");
  const messageinput = document.querySelector(".message-input");
  const subjectError = document.querySelector(".subject-error");
  const messageError = document.querySelector(".message-error");

  let isValid = true;

  if (subjectInput.value === "") {
    subjectError.textContent = "Veuillez ajouter un sujet au message";
    subjectInput.classList.add("validation-error");
    isValid = false;
  } else {
    subjectInput.classList.remove("validation-error");
    subjectError.textContent = "";
  }

  if (messageinput.value === "") {
    messageinput.classList.add("validation-error");
    messageError.textContent = "Veuillez ajouter du texte à votre message";
    isValid = false;
  } else {
    messageinput.classList.remove("validation-error");
    messageError.textContent = "";
  }
  return isValid;
}

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", ValidateEmail);
// Ouverture du formulaire

const clickForm = document.querySelector(".fa-envelope");
const clickForm2 = document.querySelector(".fa-comments");
const contactFormDisplay = document.querySelector(".form-contact-container");

clickForm.addEventListener("click", function (e) {
  e.preventDefault();

  contactFormDisplay.style.display = "block";
});
clickForm2.addEventListener("click", function (e) {
  e.preventDefault();

  contactFormDisplay.style.display = "block";
});
// Fermer le form

const contactFormContainer = document.querySelector(".contact-form");
const closeForm = document.querySelector(".close-form");

closeForm.addEventListener("click", function (e) {
  contactFormDisplay.style.display = "none";
});

contactFormDisplay.addEventListener("click", function (e) {
  if (
    e.target === contactFormContainer ||
    contactFormContainer.contains(e.target)
  ) {
    return;
  } else {
    contactFormDisplay.style.display = "none";
    resetForm();
  }
});

function resetForm() {
  const emailInput = document.querySelector("#email-input");
  const subjectInput = document.querySelector("#subject-input");
  const messageInput = document.querySelector("#message-input");
  const subjectError = document.querySelector(".subject-error");
  const emailError = document.querySelector(".email-error");
  const messageError = document.querySelector(".message-error");

  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

  emailInput.classList.remove("validation-error");
  subjectInput.classList.remove("validation-error");
  messageInput.classList.remove("validation-error");
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
}
