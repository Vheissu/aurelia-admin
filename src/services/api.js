import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

const DEMO_MODE = true;

let users = [
    {id: 34234, image: '/images/avatars/big-pete-wrigley.jpg', name: 'Big Pete Wrigley', username: 'petewrigley', email: 'bigpete@gmail.com', password: 'superhardpassword123'},
    {id: 938493, image: '/images/avatars/tina-carlyle.jpg', name: 'Tina Carlyle', username: 'tina', email: 'tina.carlyle@gmail.com', password: 'ysoserious?'},
    {id: 991, image: '/images/avatars/tre-styles.jpg', name: 'Tre Styles', username: 'trestyles123', email: 'trestylessuperfly@gmail.com', password: 'toomuchmoneytocount'},
    {id: 1, image: '/images/avatars/cameron-frye.jpg', name: 'Cameron Frye', username: 'cameron', email: 'cameronfrye@frye.com', password: 'kjfkjkdjf'},
    {id: 42, image: '/images/avatars/stoney-brown.jpg', name: 'Stoney Brown', username: 'stoney', email: 'stoney@gmail.com', password: 'password'},
    {id: 721124, image: '/images/avatars/will-smith.jpg', name: 'Will Smith', username: 'bigwillystyle', email: 'bigwill@gmail.com', password: 'f222'}
];

export class Api {
    constructor() {
        this.http = new HttpClient();
    }

    getUsers() {
        return Promise.resolve(users);
    }

    getUser(id) {
        return Promise.resolve(users.filter(user => user.id === Number(id)));
    }
}
