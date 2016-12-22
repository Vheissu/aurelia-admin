
/**
 * The current user entity loggged into the application
 * also contains things like permissions and whatnot
 * 
 */

import {users, Api} from './api';

export class User {

    constructor() {
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

    logout() {
        this.loggedIn = false;
        this.currentUser = {};

        return Promise.resolve();
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
