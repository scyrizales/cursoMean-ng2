import { TestBed, inject } from '@angular/core/testing';

import { AutorService } from './autor.service';

describe('AutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorService]
    });
  });

  it('should ...', inject([AutorService], (service: AutorService) => {
    expect(service).toBeTruthy();
  }));
});
