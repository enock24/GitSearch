import { TestBed } from '@angular/core/testing';

import { GithubServiveService } from './github-servive.service';

describe('GithubServiveService', () => {
  let service: GithubServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
