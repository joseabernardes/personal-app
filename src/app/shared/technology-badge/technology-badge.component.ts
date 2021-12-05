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

import {TechnologyType} from '../../home/services/projects/projects.db';

export interface Icon {
    name: string;
    height: number;
    width: number;
}

const TECHNOLOGY_ICONS: { [key in TechnologyType]: Icon } = {
    [TechnologyType.Android]: {
        name: 'android',
        height: 35,
        width: 39,
    },
    [TechnologyType.Firebase]: {
        name: 'firebase',
        height: 35,
        width: 124,
    },
    [TechnologyType.Maps]: {
        name: 'maps',
        height: 35,
        width: 35,
    },
};

@Component({
    selector: 'app-technology-badge',
    templateUrl: './technology-badge.component.html',
    styleUrls: ['./technology-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyBadgeComponent {

    @Input()
    public set type(type: TechnologyType) {
        this.icon = TECHNOLOGY_ICONS[type];
    }

    public icon: Icon;
}
