import { TestBed, inject } from '@angular/core/testing';

import { WhatService } from './what.service';

describe('WhatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhatService]
    });
  });

  it('should ...', inject([WhatService], (service: WhatService) => {
    expect(service).toBeTruthy();
  }));
});
