import {inject} from 'aurelia-framework';

import {Api} from '../../services/api';

@inject(Api)
export class Home {
    constructor(api) {
        this.api = api;
    }

    activate() {
        this.api.getUsers().then(users => this.users = users);
    }
}
