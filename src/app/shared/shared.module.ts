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


@NgModule({
    declarations: [
        IconComponent,
        SocialLinksComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SocialLinksComponent,
    ],
})
export class SharedModule {
}
