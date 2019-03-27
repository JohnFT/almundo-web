import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/modules/shared/models/hotel';
import { AppState } from '../../store/state/filter.state';
import { Store } from '@ngrx/store';
import { IUrls } from 'src/app/modules/shared';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {
  /**
   * Public  of card hotel component
   */
  @Input() hotel: Hotel;
  public urls: IUrls;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(state => state.urls)
      .subscribe(urls => {
        this.urls = urls;
      });
  }

  /**
   * Gets stars
   * @param length
   * @returns  Array of length stars
   */
  getStars(length) {
    return new Array(length);
  }
}
