import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HotelsRoutingModule } from './hotels-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HotelsComponent } from './hotels.component';

@NgModule({
  declarations: [HotelsComponent],
  imports: [HotelsRoutingModule, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HotelsModule {}
