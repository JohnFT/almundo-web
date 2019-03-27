// states
import { UrlsState } from '../state/url.state';

// actions
import * as fromUrlsActions from '../actions/urls.actions';

// init state
const initState: UrlsState = {
  almundoApi: null,
  assets: null
};

export function urlsReducer(
  state = initState,
  action: fromUrlsActions.urlsActions
): UrlsState {
  switch (action.type) {
    case fromUrlsActions.INIT_URLS:
      return state;
    case fromUrlsActions.GET_URLS:
      return state;
    case fromUrlsActions.SET_URLS:
      return { ...action.payload };
    default:
      return state;
  }
}
