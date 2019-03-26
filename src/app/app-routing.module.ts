// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routes
const routes: Routes = [
  { path: '', loadChildren: './modules/hotels/hotels.module#HotelsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
