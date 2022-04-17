import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxHeroesComponent } from './ngrx-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxHeroesRoutingModule {}
