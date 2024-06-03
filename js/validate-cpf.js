import { errorMessages } from "./errors.js";

export default function isValidCPF(field) {
  const cpf = field.value.replace(/\.|-/g, "");

  if (checkEqualNumbers(cpf) || checkFirstDigit(cpf) || checkSecondDigit(cpf)) {
    field.setCustomValidity(false);
    errorMessages.cpf.customError = "CPF inválido";
  }
}

function checkEqualNumbers(cpf) {
  const equalNumbers = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  return equalNumbers.includes(cpf);
}

function checkFirstDigit(cpf) {
  let sum = 0;
  let multiplier = 10;

  for (let size = 0; size < 9; size++) {
    sum += cpf[size] * multiplier;
    multiplier --;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[9];
}

function checkSecondDigit(cpf) {
  let sum = 0;
  let multiplier = 11;

  for (let size = 0; size < 10; size++) {
    sum += cpf[size] * multiplier;
    multiplier --;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[10];
}