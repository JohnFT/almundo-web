import { Component, OnInit } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
import * as fromUrlsActions from './store/actions/urls.actions';
// states
import { AppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // properties
  public title = 'almundo-client';

  constructor(private store: Store<AppState>) {
    store
      .select(state => state.urls)
      .subscribe(urls => {
        console.log(urls);
      });
  }

  ngOnInit() {
    // Init urls on store redux
    const action = new fromUrlsActions.InitUrlsActions();
    this.store.dispatch(action);
  }
}
