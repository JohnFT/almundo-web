import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared';
import { Hotel } from '../shared/models/hotel';

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

  /**
   * Creates an instance of hotels component.
   * @param _hotelService
   */
  constructor(private _hotelService: HotelService) {}

  /**
   * on init hotels service
   */
  ngOnInit() {
    this._hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels || [];
    });
  }
}
