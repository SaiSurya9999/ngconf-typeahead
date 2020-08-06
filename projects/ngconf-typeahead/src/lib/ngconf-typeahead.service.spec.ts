import { TestBed } from '@angular/core/testing';

import { NgconfTypeaheadService } from './ngconf-typeahead.service';

describe('NgconfTypeaheadService', () => {
  let service: NgconfTypeaheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgconfTypeaheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
