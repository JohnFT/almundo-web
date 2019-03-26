import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/modules/shared/models/hotel';

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

  constructor() {}

  ngOnInit() {}

  /**
   * Gets stars
   * @param length
   * @returns  Array of length stars
   */
  getStars(length) {
    return new Array(length);
  }
}
