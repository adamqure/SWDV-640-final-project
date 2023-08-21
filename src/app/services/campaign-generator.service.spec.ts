import { TestBed } from '@angular/core/testing';

import { CampaignGeneratorService } from './campaign-generator.service';

describe('CampaignGeneratorService', () => {
  let service: CampaignGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
