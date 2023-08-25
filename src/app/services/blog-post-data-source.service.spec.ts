import { TestBed } from '@angular/core/testing';

import { BlogPostDataSourceService } from './blog-post-data-source.service';

describe('BlogPostDataSourceService', () => {
  let service: BlogPostDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
