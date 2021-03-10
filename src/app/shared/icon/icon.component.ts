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

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {

    @Input()
    public set name(name: string) {
        this.iconName = `/assets/icons/${name}.svg#${name}`;
    }

    @Input()
    public color: string;

    @Input()
    public size: number;

    public iconName;
}
