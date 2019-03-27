// ngrx
import { ActionReducerMap } from '@ngrx/store';

// states
import { UrlsState } from './url.state';

// reducers
import { urlsReducer } from '../reducers/urls.reducer';

export interface AppState {
  urls: UrlsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  urls: urlsReducer
};
