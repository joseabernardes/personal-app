/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {
    Component,
    OnInit,
} from '@angular/core';

import {
    GroupedSkills,
    SkillsService,
} from '../../services/skills/skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {

    public groupedSkills: GroupedSkills[];

    constructor(private _skillsService: SkillsService) {
    }

    ngOnInit(): void {
        this.groupedSkills = this._skillsService.getGroupedSkills();
    }

}
