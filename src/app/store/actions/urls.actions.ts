// ngrx
import { Action } from '@ngrx/store';

// interfaces
import { IUrls } from '../../modules/shared';

// actions name
export const INIT_URLS = '[URLS] INIT URLS';
export const GET_URLS = '[URLS] GET URLS';
export const SET_URLS = '[URLS] SET URLS';

// actions

export class InitUrlsActions implements Action {
  readonly type = INIT_URLS;
  constructor() {}
}

export class GetUrlsActions implements Action {
  readonly type = GET_URLS;
  constructor() {}
}

export class SetUrlsActions implements Action {
  readonly type = SET_URLS;
  constructor(public payload: IUrls) {}
}

export type urlsActions = InitUrlsActions | GetUrlsActions | SetUrlsActions;
