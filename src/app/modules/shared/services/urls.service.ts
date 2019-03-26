import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUrls } from '../interfaces/urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  private urlConfig = 'assets/config/urls.json';
  constructor(private http: HttpClient) {}

  public getConfig(): Observable<IUrls> {
    return this.http.get<IUrls>(this.urlConfig);
  }
}
