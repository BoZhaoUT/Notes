import { AbstractControl, ValidationErrors } from "@angular/forms";

// this is an example of costum validation value
export class UsernameValidators {
    // this functions returns a javascript object
    // the key will be the customized error name
    // adding static here will allow outside of the class to call this method
    // without creating a UsernameValidators object
    // ValidatoinErrors | null represents 2 acceptable return types
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if ((control.value as string).indexOf(' ') >= 0)
            // true is a placeholder here
            // replace it with an javascript object containg meaningful messages
            return { cannotContainSpace: true };
        
        // null means no error
        return null;
    }

    // this is an AJAX validator
    // check if a username is unique in database
    // pretend there's is only one username 'mosh' in the database
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors> | null {
        // a promise object takes 2 parameters: resolve and reject
        // they're functions that will be called upon each situation
        return new Promise((resolve, reject) => {
            // this is an AJAX operation, it will run the callback function every 2000 ms
            setTimeout(() => {
                // pretend there's username 'mosh' in the database
                // treat resolve like a special type of return statement
                if (control.value === 'mosh') 
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });

        // before putting putting it into Promise
        // this is an AJAX operation, it will run the callback function every 2000 ms
        // setTimeout(() => {
        //     if (control.value === 'mosh')
        //         return { shouldBeUnique: true };
        //     return null
        // }, 2000);
    }
}