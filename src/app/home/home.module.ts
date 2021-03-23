/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {MenuComponent} from './components/menu/menu.component';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
})
export class HomeModule {
}
