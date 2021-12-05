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
import {HomeComponent} from './home.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {AboutComponent} from './pages/about/about.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {ProjectsComponent} from './pages/projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: WelcomeComponent,
            },
            {
                path: 'about',
                component: AboutComponent,
            },
            {
                path: 'skills',
                component: SkillsComponent,
            },
            {
                path: 'projects',
                component: ProjectsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
