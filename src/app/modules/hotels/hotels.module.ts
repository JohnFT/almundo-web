import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { HotelsRoutingModule } from './hotels-routing.module';

//own module
import { SharedModule } from '../shared/shared.module';

// Components
import { HotelsComponent } from './hotels.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardHotelComponent } from './components/card-hotel/card-hotel.component';
import { filterReducer } from './store/reducers/filter.reducer';

// ngrx
import { StoreModule } from '@ngrx/store';

// scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [HotelsComponent, FilterComponent, CardHotelComponent],
  imports: [
    SharedModule,
    HotelsRoutingModule,
    StoreModule.forFeature('filter', filterReducer),
    InfiniteScrollModule
  ]
})
export class HotelsModule {}
