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

    private _messages = [
        'Welcome to my Portfolio.',
        'Welcome aboard.',
        'It\'s a pleasure to have you here!',
        'Hi, it\'s nice to see you here.',
    ];

    ngOnInit(): void {
        this.message = this._getRandomMessage();
    }

    private _getRandomMessage(): string {
        return this._messages[Math.floor(Math.random() * this._messages.length)];
    }
}
