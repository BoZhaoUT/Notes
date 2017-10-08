export class AppError {
    // making originalError public will help logging this error
    constructor(public originalError?: any) {

    }
}