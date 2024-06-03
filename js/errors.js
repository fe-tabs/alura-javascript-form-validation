export const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
];

export const errorMessages = {
  nome: {
    valueMissing: "O campo Nome não pode estar vazio.",
    typeMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido"
  },
  email: {
    valueMissing: "O campo Email não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um email válido"
  },
  aniversario: {
    valueMissing: "O campo Data de Nascimento não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma data válido.",
    tooShort: "Por favor, preencha uma data válido"
  },
  rg: {
    valueMissing: "O campo RG não pode estar vazio.",
    typeMismatch: "Por favor, preencha um RG válido.",
    tooShort: "Por favor, preencha um RG válido"
  },
  cpf: {
    valueMissing: "O campo CPF não pode estar vazio.",
    typeMismatch: "Por favor, preencha um CPF válido.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    tooShort: "Por favor, preencha um CPF válido",
    tooLong: "Por favor, preencha um CPF válido"
  },
}