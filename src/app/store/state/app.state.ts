import { UrlsState } from './url.state';
import { ActionReducerMap } from '@ngrx/store';
import { urlsReducer } from '../reducers/urls.reducer';
export interface AppState {
  urls: UrlsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  urls: urlsReducer
};
