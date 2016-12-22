import {inject, observable} from 'aurelia-framework';

import {Api} from '../../../services/api';
import {Redirect} from 'aurelia-router';

@inject(Api)
export class View {
    @observable() currentUserFile = null;

    constructor(api) {
        this.api = api;
        this.editMode = false;
        this.user = {};
    }

    canActivate(params) {
        if (params.id) {
            return this.api.getUser(params.id).then(user => this.user = user[0]);
        }

        return new Redirect('/dashboard/users');
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    triggerAvatarChange() {
        
    }

    deleteUser() {
        
    }

    currentUserFileChanged(file) {
        let theFile = file.item(0);

        if (theFile) {
            this.user.image = URL.createObjectURL(theFile);
        }
    }
}
