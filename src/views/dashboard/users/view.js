import {inject, observable} from 'aurelia-framework';

import {Api} from '../../../services/api';
import {Redirect, Router} from 'aurelia-router';

import $ from 'jquery';

@inject(Api, Router)
export class View {
    @observable() currentUserFile = null;

    constructor(api, router) {
        this.api = api;
        this.router = router;

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
        $('#deleteUserModal').modal('show');
    }

    deleteUserConfirm() {
        $('#deleteUserModal').modal('hide');
        this.api.deleteUser(this.user.id).then(() => this.router.navigateToRoute('users'));
    }

    currentUserFileChanged(file) {
        let theFile = file.item(0);

        if (theFile) {
            this.user.image = URL.createObjectURL(theFile);
        }
    }
}
