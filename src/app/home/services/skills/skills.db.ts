/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

export enum SkillType {
    FrontEnd = 'Frontend',
    BackEnd = 'Backend',
}

interface RowSkill {
    name: string;
    color: string | [string, string];
    type: SkillType;
    periods: {
        startDate: Date;
        endDate?: Date;
    }[];
}

export const SKILLS: RowSkill[] = [
    {
        name: 'HTML + CSS',
        type: SkillType.FrontEnd,
        color: ['#e54c21', '#ee704d'],
        periods: [
            {
                startDate: new Date(2018, 1, 1),
            },
        ],
    },
    {
        name: 'Angular',
        type: SkillType.FrontEnd,
        color: ['#c3012f', '#e4345b'],
        periods: [
            {
                startDate: new Date(2018, 5, 1),
            },
        ],
    },
    {
        name: 'Sass',
        type: SkillType.FrontEnd,
        color: ['#c9438a', '#c96095'],
        periods: [
            {
                startDate: new Date(2018, 7, 30),
            },
        ],
    },
    {
        name: 'RxJS',
        type: SkillType.FrontEnd,
        color: ['#4e3b4f', '#745875'],
        periods: [
            {
                startDate: new Date(2020, 7, 1),
            },
        ],
    },
    {
        name: 'Karma + Jasmine',
        type: SkillType.FrontEnd,
        color: ['#86407e', '#a871a2'],
        periods: [
            {
                startDate: new Date(2020, 7, 1),
            },
        ],
    },
    {
        name: 'Protractor',
        type: SkillType.FrontEnd,
        color: ['#b02d2f', '#da3135'],
        periods: [
            {
                startDate: new Date(2020, 7, 1),
            },
        ],
    },
    {
        name: 'Node.JS',
        type: SkillType.BackEnd,
        color: ['#3c873a', '#71bc51'],
        periods: [
            {
                startDate: new Date(2018, 7, 30),
                endDate: new Date(2020, 6, 26),
            },
        ],
    },
    {
        name: 'Python',
        type: SkillType.BackEnd,
        color: ['#3869a1', '#4d78a9'],
        periods: [
            {
                startDate: new Date(2019, 1, 1),
                endDate: new Date(2020, 6, 26),
            },
        ],
    },
    {
        name: 'Mongo DB',
        type: SkillType.BackEnd,
        color: ['#559333', '#82ce50'],
        periods: [
            {
                startDate: new Date(2018, 7, 30),
                endDate: new Date(2020, 6, 26),
            },
        ],
    },
    {
        name: 'RabbitMQ',
        type: SkillType.BackEnd,
        color: ['#ff6701', '#fb914d'],
        periods: [
            {
                startDate: new Date(2018, 1, 1),
                endDate: new Date(2018, 6, 26),
            },
            {
                startDate: new Date(2019, 1, 1),
                endDate: new Date(2020, 6, 26),
            },
        ],
    },
    {
        name: 'Docker',
        type: SkillType.BackEnd,
        color: ['#1a7ea0', '#35add3'],
        periods: [
            {
                startDate: new Date(2018, 1, 1),
                endDate: new Date(2018, 6, 26),
            },
            {
                startDate: new Date(2019, 1, 1),
                endDate: new Date(2020, 6, 26),
            },
        ],
    },
];
