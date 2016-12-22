import {inject} from 'aurelia-framework';

import {Api} from '../../../services/api';
import {Redirect} from 'aurelia-router';

@inject(Api)
export class View {
    constructor(api) {
        this.api = api;
    }

    canActivate(params) {
        if (params.id) {
            return this.api.getUser(params.id).then(user => this.user = user[0]);
        }

        return new Redirect('/dashboard/users');
    }
}
