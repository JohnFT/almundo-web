import { Injectable } from '@angular/core';

// rxjs
import { map, mergeMap } from 'rxjs/operators';

// ngrx
import * as fromUrlsActions from '../actions/urls.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { UrlsService } from 'src/app/modules/shared';

@Injectable({
  providedIn: 'root'
})
export class UrlsEffects {
  constructor(private actions$: Actions, private urlsService: UrlsService) {}

  @Effect()
  initUrls$ = this.actions$.pipe(
    ofType(fromUrlsActions.INIT_URLS),
    mergeMap(() =>
      this.urlsService
        .getConfig()
        .pipe(map(urls => ({ type: fromUrlsActions.SET_URLS, payload: urls })))
    )
  );
}
