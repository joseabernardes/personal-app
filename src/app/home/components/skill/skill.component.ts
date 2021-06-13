/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';

import {Skill} from '../../services/skills/skills.service';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {

    @Input()
    public skill: Skill;

    public width = 15;

    public years: number;

    public rounded: boolean;

    public background: string;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        setTimeout(() => this._setValues(), 1);
    }

    private _setValues(): void {
        const {percentage, yearsWorking: {years, rounded}} = this.skill;

        this.width = percentage;
        this.years = years;
        this.rounded = rounded;
        this.background = this._getBackground();
        console.log(this.background);

        this._changeDetectorRef.detectChanges();
    }

    private _getBackground(): string {
        const color = this.skill.color;
        const singleColor = typeof color === 'string';

        return singleColor
            ? color as string
            : `linear-gradient(90deg, ${color[0]} 35%, ${color[1]} 100%)`;
    }
}
