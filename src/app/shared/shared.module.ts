/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IconComponent} from './icon/icon.component';
import {SocialLinksComponent} from './social-links/social-links.component';
import {ConsoleTextAnimationDirective} from './console-text-animation/console-text-animation.directive';


@NgModule({
    declarations: [
        ConsoleTextAnimationDirective,
        IconComponent,
        SocialLinksComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ConsoleTextAnimationDirective,
        SocialLinksComponent,
    ],
})
export class SharedModule {
}
