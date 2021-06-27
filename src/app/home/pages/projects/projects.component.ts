/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';

import {ProjectsService} from '../../services/projects/projects.service';
import {Project} from '../../services/projects/projects.db';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {

    public projects: Project[];

    constructor(private _projectsService: ProjectsService) {
    }

    ngOnInit(): void {
        this.projects = this._projectsService.getProjects();
    }
}
