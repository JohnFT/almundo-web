import { AppState } from 'src/app/store/state/app.state';

export interface FilterSate {
  stars: string;
  name: string;
  page: number;
  size: number;
}

export interface AppState extends AppState {
  filter: FilterSate;
}
