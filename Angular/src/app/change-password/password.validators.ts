import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        // assume '1234' is the old password
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve( { invalidOldPassword: true })
            else
                resolve( null );
        })
    }

    // check if new password and confirm password match
    static passwordShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value)
            return { passwordShouldMatch: true };

        return null;
    }
}