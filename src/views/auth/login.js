import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

import {CssAnimator} from 'aurelia-animator-css';

import {User} from '../../services/user';

@inject(User, Router, CssAnimator)
export class Login {
    
    constructor(user, router, animator) {
        this.user = user;
        this.router = router;
        this.animator = animator;

        this.foundAvatar = null;

        this.username = '';
        this.password = '';
    }

    attached() {
        document.body.classList.add('login-screen');
    }

    detached() {
        document.body.classList.remove('login-screen');
    }

    findUserAvatar() {
        this.user.findAvatar(this.username).then(avatar => this.foundAvatar = avatar);
    }

    handleFormSubmission(e) {
        this.user.login(this.username.trim(), this.password)
            .then(() => { 
                this.animator.addClass(this.loginForm, 'fade-out').then(() => this.router.navigateToRoute('dashboard'));
            })
            .catch(e => this.errors = e);
    }
}
