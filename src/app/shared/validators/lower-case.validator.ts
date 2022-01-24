import { AbstractControl } from '@angular/forms';

// control vem do formulário, onde o usuário interage
export function LowerCaseValidator(control: AbstractControl) {

  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { lowerCase: true }
  }

  return null;
}
