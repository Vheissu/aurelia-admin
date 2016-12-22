export class App {

    configureRouter(config, router) {
        this.router = router;

        config.title = 'Aurelia Admin';

        config.map([
            { route: '', redirect: 'user/login' },
            { route: 'auth/login', name: 'login', layoutView: 'views/layouts/auth.html', moduleId:'./views/auth/login', nav: true,  title: 'Login' },
            { route: 'dashboard', name: 'dashboard', moduleId:'./views/dashboard/home', nav: true,  title: 'Dashboard' }
        ]);
    }
}
