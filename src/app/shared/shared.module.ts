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
import {TechnologyBadgeComponent} from './technology-badge/technology-badge.component';


@NgModule({
    declarations: [
        ConsoleTextAnimationDirective,
        IconComponent,
        SocialLinksComponent,
        TechnologyBadgeComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ConsoleTextAnimationDirective,
        SocialLinksComponent,
        TechnologyBadgeComponent,
    ],
})
export class SharedModule {
}
