import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared';
import { Hotel } from '../shared/models/hotel';
// ngrx
import { Store } from '@ngrx/store';

// rxjs
import { take } from 'rxjs/operators';
import { AppState, FilterSate } from './store/state/filter.state';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  /**
   * Hotels  of hotels component
   */
  public hotels: Hotel[];
  private filter: FilterSate;
  public selector: string = '.hotels';

  /**
   * Creates an instance of hotels component.
   * @param _hotelService
   */
  constructor(
    private _hotelService: HotelService,
    private store: Store<AppState>
  ) {}

  /**
   * on init hotels service
   */
  ngOnInit() {
    this.store
      .select(state => state.filter)
      .subscribe(filter => {
        // Get all hotes by filter
        this.filter = filter;

        this._hotelService
          .getHotels(filter.page, filter.size, filter.name, filter.stars)
          .pipe(take(1))
          .subscribe(hotels => {
            this.hotels = hotels || [];
          });
      });
  }

  /**
   * Paginator Scroll
   */
  onScroll() {
    this.filter.page++;

    this._hotelService
      .getHotels(
        this.filter.page,
        this.filter.size,
        this.filter.name,
        this.filter.stars
      )
      .pipe(take(1))
      .subscribe(hotels => {
        this.hotels.push(...hotels);
      });
  }
}
