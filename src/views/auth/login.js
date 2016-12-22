export class Login {
    constructor() {
        this.username = '';
        this.password = '';
    }

    attached() {
        document.body.classList.add('login-screen');
    }

    detached() {
        document.body.classList.remove('login-screen');
    }

    handleFormSubmission(e) {
        
    }
}
