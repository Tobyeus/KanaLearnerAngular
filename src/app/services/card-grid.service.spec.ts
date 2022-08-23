import { TestBed } from '@angular/core/testing';

import { CardGridServiceService } from './card-grid.service';

describe('CardGridServiceService', () => {
  let service: CardGridServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardGridServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
