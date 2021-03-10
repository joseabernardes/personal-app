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


@NgModule({
    declarations: [
        UnderConstructionComponent,
        IconComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class SharedModule {
}
