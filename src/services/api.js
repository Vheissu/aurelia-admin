import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

const DEMO_MODE = true;

let users = [
    {id: 34234, name: 'Rob Schlob', username: 'rob', email: 'robdobjob@gmail.com', password: 'superhardpassword123'},
    {id: 938493, name: 'George Clooney', username: 'clooney1', email: 'george.clooney@gmail.com', password: 'ysoserious?'},
    {id: 991, name: 'Adam Sandler', username: 'badmoviemaker', email: 'adamsandlermakesmovies@gmail.com', password: 'toomuchmoneytocount'},
    {id: 1, name: 'Elon Musk', username: 'elon', email: 'elonmusk@tesla.com', password: 'spacextothemoon11'},
    {id: 42, name: 'Donald Trump', username: 'donaldtrump', email: 'donald@trump.com', password: 'password'}
];

export class Api {
    constructor() {
        this.http = new HttpClient();
    }

    getUsers() {
        return Promise.resolve(users);
    }
}
