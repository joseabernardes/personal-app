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


@NgModule({
    declarations: [
        UnderConstructionComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
