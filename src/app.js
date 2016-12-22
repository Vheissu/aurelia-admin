import {inject} from 'aurelia-framework';

import {Redirect} from 'aurelia-router';

import {User} from './services/user';

@inject(User)
export class App {

    constructor(user) {
        this.user = user;
    }

    configureRouter(config, router) {
        this.router = router;

        config.title = 'Aurelia Admin';

        let step = new RouteAuthorisationCheck(this.user);

        config.addAuthorizeStep(step);

        let handleUnknownRoutes = (instruction) => {
            return { route: 'not-found', moduleId: './views/not-found' };
        }

        config.map([
            { route: '', redirect: 'user/login' },
            { route: 'auth/login', name: 'login', layoutView: 'views/layouts/auth.html', moduleId:'./views/auth/login', nav: false,  title: 'Login' },
            { route: 'dashboard', name: 'dashboard', moduleId:'./views/dashboard/home', nav: true,  title: 'Dashboard', settings: { auth: true } },
            { route: 'dashboard/users', name: 'users', moduleId:'./views/dashboard/users/list', nav: true,  title: 'Users', settings: { auth: true } },
            { route: 'dashboard/users/:id', name: 'usersView', moduleId:'./views/dashboard/users/view', nav: false,  title: 'User', settings: { auth: true } }
        ]);
    }
}

class RouteAuthorisationCheck {
    constructor(user) {
        this.user = user;
    }
    
    run (navigationInstruction, next) {
        if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
            if (!this.user.loggedIn) {
                 return next.cancel(new Redirect('auth/login'));
            }
        }

        return next();
    }
}
