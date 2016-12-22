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
        this.clonedUser = {};
    }

    canActivate(params) {
        if (params.id) {
            return this.api.getUser(params.id)
                .then(user => this.user = user[0])
                .then(() => {
                    this.clonedUser = JSON.parse(JSON.stringify(this.user));
                });
        }

        return new Redirect('/dashboard/users');
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
        this.cancelChanges();
    }

    cancelChanges() {
        this.user = JSON.parse(JSON.stringify(this.clonedUser));
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
