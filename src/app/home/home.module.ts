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
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {AboutComponent} from './pages/about/about.component';
import {SkillComponent} from './components/skill/skill.component';
import {SkillsComponent} from './pages/skills/skills.component';

@NgModule({
    declarations: [
        AboutComponent,
        MenuComponent,
        HomeComponent,
        SkillComponent,
        SkillsComponent,
        WelcomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
})
export class HomeModule {
}
