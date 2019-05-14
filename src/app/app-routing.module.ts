import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOneComponent } from './add/add-one/add-one.component';
import { ViewComponent } from './add/view/view.component';
const routes: Routes = [
  { path: 'add-restaurants', component: AddOneComponent },
  {
    path:'view-restauransts',component:ViewComponent
  },
  { path: '',   redirectTo: '/view-restauransts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
