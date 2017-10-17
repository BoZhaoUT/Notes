import { ErrorHandler } from '@angular/core';

// this will be a global error handler
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occured.');
        console.log(error);
    }
}
