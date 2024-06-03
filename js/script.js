import isOfAge from "./validate-birth-date.js";
import isValidCPF from "./validate-cpf.js";
import { errorTypes, errorMessages } from "./errors.js";

const formFields = document.querySelectorAll("[required]");

formFields.forEach(field => {
  field.addEventListener("blur", () => verifyField(field));
  field.addEventListener("invalid", event => event.preventDefault());
});

function verifyField(field) {
  let message = "";
  field.setCustomValidity("");
  
  if (field.name == "cpf" && field.value.length >= 11) {
    isValidCPF(field);
  }
  
  if (field.name == "aniversario" && field.value != "") {
    isOfAge(field);
  }

  errorTypes.forEach(error => {
    if (field.validity[error]) {
      message = errorMessages[field.name][error];
    }
  });

  const errorMessageContainer = field.parentNode.querySelector(
    ".mensagem-erro"
  );
  const inputValidator = field.checkValidity();

  if (!inputValidator) {
    errorMessageContainer.textContent = message;
  } else {
    errorMessageContainer.textContent = "";
  }
}
