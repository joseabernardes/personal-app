/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
