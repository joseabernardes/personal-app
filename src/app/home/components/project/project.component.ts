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
    Input,
} from '@angular/core';

import {Project} from '../../services/projects/projects.db';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {

    @Input()
    public project: Project;
}
