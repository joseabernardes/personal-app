/*
 * *************************************************************************
 *
 * Copyright: José Bernardes, 2020 - 2021
 *
 * *************************************************************************
 */

import {TestBed} from '@angular/core/testing';

import {ProjectsService} from './projects.service';

describe('ProjectsService', () => {
    let service: ProjectsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProjectsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
