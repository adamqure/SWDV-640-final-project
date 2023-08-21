import { TestBed } from '@angular/core/testing';

import { CampaignDataSourceService } from './campaign-data-source.service';

describe('CampaignDataSourceService', () => {
  let service: CampaignDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
