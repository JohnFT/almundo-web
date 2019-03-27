import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, FilterSate } from '../../store/state/filter.state';
import * as fromFilterAction from '../../store/actions/filter.actions';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filter: FilterSate;
  public isfilter: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(state => state.filter)
      .subscribe(filter => {
        this.filter = filter;
      });
  }

  /**
   * Find hotel by name
   */
  public findHotelByName() {
    this.excuteFilter();
  }

  /**
   * Chekcs stars
   */
  public changeState(event, value) {
    if (event.checked && !value) {
      this.filter.stars = '';
    } else if (event.checked) {
      this.filter.stars += `,${value}`;
    } else {
      this.filter.stars = this.filter.stars.replace(`,${value}`, '');
    }

    this.excuteFilter();
  }

  // Execute filter
  private excuteFilter() {
    this.filter.page = 1;
    const action = new fromFilterAction.SetFilterAction(this.filter);
    this.store.dispatch(action);
  }

  // show filter
  public changeFilter() {
    this.isfilter = !this.isfilter;
  }
}
