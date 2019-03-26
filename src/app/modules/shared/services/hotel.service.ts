import { Injectable } from '@angular/core';
// rxjs
import { Observable } from 'rxjs';
// ngrx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { IUrls } from '../interfaces/urls';
import { Hotel } from '../models/hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  // url api rest
  private urls: IUrls;

  /**
   * Builder
   * Init urls of redux store
   * @param store
   * @param http
   */
  constructor(private store: Store<AppState>, private http: HttpClient) {
    this.store
      .select(state => state.urls)
      .subscribe(urls => {
        this.urls = urls;
      });
  }

  /**
   * Get Hotels Filters and/or paginated
   * @param page number page paginator
   * @param size size items by page paginator
   * @param name filter name hotel
   * @param stars filter number stars
   */
  public getHotels(
    page?: number,
    size?: number,
    name?: string,
    stars?: string
  ): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.urls.almundoApi}/hotels`);
  }
}
