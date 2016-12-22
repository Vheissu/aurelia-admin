export class App {

    configureRouter(config, router) {
        this.router = router;

        config.title = 'Aurelia Admin';

        config.map([
            { route: '', redirect: 'user/login' },
            { route: 'auth/login', name: 'login', layoutView: 'views/layouts/auth.html', moduleId:'./views/auth/login', nav: false,  title: 'Login' },
            { route: 'dashboard', name: 'dashboard', moduleId:'./views/dashboard/home', nav: true,  title: 'Dashboard' },
            { route: 'dashboard/users', name: 'users', moduleId:'./views/dashboard/users/list', nav: true,  title: 'Users' },
            { route: 'dashboard/users/:id', name: 'usersView', moduleId:'./views/dashboard/users/view', nav: false,  title: 'User' }
        ]);
    }
}
