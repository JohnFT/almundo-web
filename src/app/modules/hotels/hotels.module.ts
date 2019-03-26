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

@NgModule({
  declarations: [HotelsComponent, FilterComponent, CardHotelComponent],
  imports: [SharedModule, HotelsRoutingModule]
})
export class HotelsModule {}
