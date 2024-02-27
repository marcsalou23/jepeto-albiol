import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAirbnbComponent } from './views/app-airbnb.component';
import { AppBookingComponent } from './views/app-booking.component';
import { FotosComponent } from './fotos/fotos.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [
  { path: '', component: AppAirbnbComponent },
  { path: 'booking', component: AppBookingComponent },
  { path: 'fotos', component: FotosComponent }, // Corrected route for FotosComponent
  { path: 'services-list', component: ServicesListComponent }, // Corrected route for FotosComponent
  { path: '**', redirectTo: '/index.html' }, // Consider removing this line if not necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
