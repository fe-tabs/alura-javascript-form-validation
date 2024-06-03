import isOfAge from "./validate-birth-date.js";
import isValidCPF from "./validate-cpf.js";
import { errorTypes, errorMessages } from "./errors.js";

const form = document.querySelector("[data-formulario]");
const formFields = document.querySelectorAll("[required]");

form.addEventListener("submit", event => {
  event.preventDefault();

  const data = {
    "name": event.target.element["nome"].value,
    "email": event.target.element["email"].value,
    "rg": event.target.element["rg"].value,
    "cpf": event.target.element["cpf"].value,
    "birthDate": event.target.element["aniversario"].value
  };

  localStorage.setItem("register", JSON.stringify(data));

  window.location.href = './abrir-conta-form-2.html';
})

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
