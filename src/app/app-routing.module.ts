import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { BusinessComponent } from './components/business/business.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ScienceComponent } from './components/science/science.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
  {
    path: 'sports',
    component: SportsComponent
},
  {
    path: 'business',
    component: BusinessComponent
},
  {
    path: 'technology',
    component: TechnologyComponent
},
  {
    path: 'science',
    component: ScienceComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
