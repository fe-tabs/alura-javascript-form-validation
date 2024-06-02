export default function isOfAge(field) {
  const birthDate = new Date(field.value);
  checkAge(birthDate);
  console.log(checkAge(birthDate));
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