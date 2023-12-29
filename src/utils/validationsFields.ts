export function completeNameValidate(completeName: string) {
  const namePattern = /[A-z]{2}[ ][A-z]{2}/;
  return namePattern.test(completeName);
}

export function emailValidate(email: string) {
  const emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

export function numberValidate(value: string) {
  const numberPattern = /[0-9]/;
  return numberPattern.test(value);
}
