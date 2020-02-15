import { FormGroup } from '@angular/forms';

export function checkPasswords(group: FormGroup) {
  const pass = group.controls.password.value;
  const confirmPass = group.controls.repeatedPassword.value;

  return pass === confirmPass ? null : { notSame: true };
}
