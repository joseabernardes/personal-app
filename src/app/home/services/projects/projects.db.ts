/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

export enum TechnologyType {
    Android,
    Firebase,
    Maps,
}

export interface Project {
    name: string;
    description: string;
    mainImage: string;
    technologies: TechnologyType[];
}

export const PROJECTS: Project[] = [
    {
        name: 'Around Tâmega e Sousa',
        description: 'A mobile application for managing points of interest in the Tâmega e Sousa Intermunicipal Community.\n',
        mainImage: '/assets/images/around-tamega-e-sousa.webp',
        technologies: [
            TechnologyType.Android,
            TechnologyType.Firebase,
            TechnologyType.Maps,
        ],
    },
];
