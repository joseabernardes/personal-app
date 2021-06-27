/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {Injectable} from '@angular/core';

import {
    Project,
    PROJECTS,
} from './projects.db';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {

    public getProjects(): Project[] {
        return PROJECTS;
    }
}
