/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

    public message: string;

    private _messages: string [] = [
        'Welcome to my Portfolio.',
        'Welcome aboard.',
        'It\'s a pleasure to have you here!',
        'Hi, it\'s nice to see you here.',
        'Hello world! Welcome to my creative hub',
        'Hello there! Ready to dive into my portfolio?',
        'A warm welcome to my corner of the internet!',
    ];

    ngOnInit(): void {
        this.message = this._getRandomMessage();
    }

    private _getRandomMessage(): string {
        return this._messages[Math.floor(Math.random() * this._messages.length)];
    }
}
