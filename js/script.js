import isOfAge from "./validate-birth-date.js";
import isValidCPF from "./validate-cpf.js";

const formFields = document.querySelectorAll("[required]");

formFields.forEach(field => {
  field.addEventListener("blur", () => verifyField(field));
  field.addEventListener("invalid", event => event.preventDefault());
});

function verifyField(field) {
  if (field.name == "cpf" && field.value.length >= 11) {
    isValidCPF(field);
  }

  if (field.name == "aniversario" && field.value != "") {
    isOfAge(field);
  }
}

console.log(formFields);