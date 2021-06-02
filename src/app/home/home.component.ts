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
} from '@angular/core';
import {fadeAnimation} from './animations/fade.animation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeAnimation],
})
export class HomeComponent {

    public getRouterOutletState(outlet): string {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}
