/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appConsoleTextAnimation]',
})
export class ConsoleTextAnimationDirective implements AfterViewInit {

    @Input()
    public appConsoleTextAnimation: string;

    @Input()
    public hideUnderscoreOnEnd = false;

    @Input()
    public speed = 120;

    @Input()
    public initialDelay = 0;


    constructor(private _elementRef: ElementRef,
                private _renderer2: Renderer2) {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this._animate();
        }, this.initialDelay);
    }

    private _animate(): void {
        let visible = true;
        let letterCount = 1;
        let text = '';
        const underscoreElement = this._renderer2.createElement('span');
        const textElement = this._renderer2.createElement('span');

        this._renderer2.setProperty(underscoreElement, 'innerText', '_');
        this._renderer2.setStyle(underscoreElement, 'display', 'inline-block');
        this._renderer2.setStyle(underscoreElement, 'padding-left', '0.5rem');
        this._renderer2.appendChild(this._elementRef.nativeElement, textElement);
        this._renderer2.appendChild(this._elementRef.nativeElement, underscoreElement);


        const textInterval = window.setInterval(() => {
            text = this.appConsoleTextAnimation.substring(0, letterCount);

            this._renderer2.setProperty(textElement, 'innerText', text);
            letterCount += 1;

            if (text === this.appConsoleTextAnimation) {
                clearInterval(textInterval);
            }

        }, this.speed);


        const underscoreInterval = window.setInterval(() => {
            this._renderer2.setStyle(underscoreElement, 'opacity', visible ? 0 : 1);
            visible = !visible;

            if (text === this.appConsoleTextAnimation && this.hideUnderscoreOnEnd) {
                this._renderer2.setStyle(underscoreElement, 'opacity', 0);

                clearInterval(underscoreInterval);
            }
        }, 400);
    }


}
