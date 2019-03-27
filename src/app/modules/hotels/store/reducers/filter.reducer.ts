import { FilterSate } from '../state/filter.state';
import * as fromFilterAction from '../actions/filter.actions';

const initState: FilterSate = {
  page: 1,
  name: null,
  size: 5,
  stars: ''
};

export function filterReducer(
  state = initState,
  action: fromFilterAction.filterActions
): FilterSate {
  switch (action.type) {
    case fromFilterAction.GET_FILTER:
      return state;
    case fromFilterAction.SET_FILTER:
      return { ...action.filter };
    default:
      return state;
  }
}
