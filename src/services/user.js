
/**
 * The current user entity loggged into the application
 * also contains things like permissions and whatnot
 * 
 */
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {users, Api} from './api';
import {Flash} from './flash';

@inject(Flash, Router)
export class User {

    constructor(flash, router) {
        this.flash = flash;
        this.router = router;

        this.loggedIn = false;
        this.currentUser = {};
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            users.forEach(user => {
                if (user.username === username) {
                    if (user.password === password) {
                        this.currentUser = user;
                        this.loggedIn = true;
                        return resolve(user);
                    }
                }
            });

            return reject(new Error('Credentials were invalid, please check your username and password then try again'));
        });
    }

    logout(redirect = 'login') {
        this.loggedIn = false;
        this.currentUser = {};

        this.flash.setMessage('You successfully logged out.');

        this.router.navigateToRoute(redirect);
    }

    userCan(permission) {
        return this.currentUser.permissions.includes(permission);
    }

    findAvatar(username) {
        return new Promise((resolve, reject) => {
            users.forEach(user => {
                if (user.username === username) {
                    return resolve(user.image);
                }
            });

            return reject(null);
        });
    }
}
