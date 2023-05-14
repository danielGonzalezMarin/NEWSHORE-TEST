import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyComponent } from './journey/journey.compoonent';

const routes: Routes = [
  {path:'', component: JourneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
