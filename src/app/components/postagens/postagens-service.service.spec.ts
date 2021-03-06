import { TestBed } from '@angular/core/testing';

import { PostagensServiceService } from './postagens-service.service';

describe('PostagensServiceService', () => {
  let service: PostagensServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostagensServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
