import { errorMessages } from "./errors.js";

export default function isOfAge(field) {
  const birthDate = new Date(field.value);
  if (!checkAge(birthDate)) {
    field.setCustomValidity(false);
    errorMessages.aniversario.customError = "O usuário não é maior de idade";
  }
}

function checkAge(date) {
  const currentDate = new Date();
  const dateOver18 = new Date(
    date.getUTCFullYear() + 18, 
    date.getUTCMonth(), 
    date.getUTCDate()
  );

  return currentDate >= dateOver18;
}