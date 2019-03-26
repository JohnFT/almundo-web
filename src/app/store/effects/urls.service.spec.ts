import { TestBed } from '@angular/core/testing';

import { UrlsEffects } from './urls.effect';

describe('UrlsEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlsEffects = TestBed.get(UrlsEffects);
    expect(service).toBeTruthy();
  });
});
