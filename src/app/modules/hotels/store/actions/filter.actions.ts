import { Action } from '@ngrx/store';
import { FilterSate } from '../state/filter.state';

export const GET_FILTER = '[Filter] Get Filters';
export const SET_FILTER = '[Filter] Set Filters';

export class GetFilterAction implements Action {
  readonly type = GET_FILTER;
  constructor() {}
}

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: FilterSate) {}
}

export type filterActions = GetFilterAction | SetFilterAction;
