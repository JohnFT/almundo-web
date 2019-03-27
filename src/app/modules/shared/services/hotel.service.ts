import { Injectable } from '@angular/core';
// rxjs
import { Observable } from 'rxjs';
// ngrx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { IUrls } from '../interfaces/urls';
import { Hotel } from '../models/hotel';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    let params = new HttpParams();
    params = page ? params.append('page', page.toString()) : params;
    params = size ? params.append('size', size.toString()) : params;
    params = name ? params.append('name', name) : params;
    params = stars ? params.append('stars', stars) : params;

    return this.http.get<Hotel[]>(`${this.urls.almundoApi}/hotels`, { params });
  }
}
