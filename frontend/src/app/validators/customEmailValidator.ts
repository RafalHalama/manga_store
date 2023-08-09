import { AbstractControl, ValidationErrors } from '@angular/forms';

export const customEmailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const email = '' + control.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    return { customEmailValidator: true };
  }

  return null;
};
