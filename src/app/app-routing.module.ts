import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [
  { path: 'fotos', component: FotosComponent }, // Corrected route for FotosComponent
  { path: 'services-list', component: ServicesListComponent }, // Corrected route for FotosComponent
  { path: '**', redirectTo: '/index.html' }, // Consider removing this line if not necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
