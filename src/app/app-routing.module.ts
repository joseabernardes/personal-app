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

import {UnderConstructionComponent} from './core/pages/under-construction/under-construction.component';

const routes: Routes = [
    {
        path: '',
        component: UnderConstructionComponent,
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '',
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
