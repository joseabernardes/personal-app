/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {IconComponent} from './icon/icon.component';
import {SocialLinksComponent} from './social-links/social-links.component';


@NgModule({
    declarations: [
        UnderConstructionComponent,
        IconComponent,
        SocialLinksComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class SharedModule {
}
