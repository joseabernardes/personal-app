/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {Injectable} from '@angular/core';

import {
    SKILLS,
    SkillType,
} from './skills.db';

@Injectable({
    providedIn: 'root',
})
export class SkillsService {

    public static daysPerYear = 365;

    public static beginningOfCareer = new Date(2018, 1, 1);

    constructor() {
    }

    public getSkills(): Skill[] {
        return SKILLS.map<Skill>(({name, color, type, periods}) => {
            const daysWorking = periods.reduce(
                (accumulator, {startDate, endDate}) => accumulator + this._daysDiff(startDate, endDate || new Date()),
                0);
            const daysFromBeginning = this._daysDiff(SkillsService.beginningOfCareer, new Date());
            const percentage = (daysWorking * 100) / daysFromBeginning;
            const years = daysWorking / SkillsService.daysPerYear;
            const roundYears = Math.round(years);
            const rounded = roundYears > years;


            return {
                name,
                color,
                daysWorking,
                percentage,
                type,
                yearsWorking: {
                    years: roundYears,
                    rounded,
                },
            };
        });
    }

    public getGroupedSkills(): GroupedSkills[] {
        const skills = this.getSkills();
        const defaultGroupedSkills: GroupedSkills[] = [
            {
                type: SkillType.FrontEnd,
                sort: 1,
                skills: [],
            }, {
                type: SkillType.BackEnd,
                sort: 2,
                skills: [],
            },
        ];

        return skills.reduce<GroupedSkills[]>((groupedSkills, skill) => {
            const groupedSkill: GroupedSkills = groupedSkills.find(_groupedSkill => _groupedSkill.type === skill.type);

            groupedSkill.skills.push(skill);

            return groupedSkills;
        }, defaultGroupedSkills).sort((a, b) => a.sort - b.sort);
    }

    private _daysDiff(date1: Date, date2: Date): number {
        const diffTime = Math.abs(date2.getTime() - date1.getTime());

        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
}

export interface Skill {
    name: string;
    color: string | [string, string];
    type: SkillType;
    daysWorking: number;
    yearsWorking: {
        years: number;
        rounded: boolean;
    };
    percentage: number;
}

export interface GroupedSkills {
    type: SkillType;
    sort: number;
    skills: Skill[];
}
