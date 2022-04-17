import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxHeroesComponent } from './ngrx-heroes.component';
import { IndexComponent } from './index/index.component';
import { SideFormComponent } from './side-form/side-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { NgrxHeroesRoutingModule } from './ngrx-heroes-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromHeroes from '../../store/reducers/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from '../../store/effects/heroes.effects';

@NgModule({
  declarations: [NgrxHeroesComponent, IndexComponent, SideFormComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgrxHeroesRoutingModule,
    StoreModule.forFeature(fromHeroes.heroesFeatureKey, fromHeroes.reducer),
    EffectsModule.forFeature([HeroesEffects]),
  ],
})
export class NgrxHeroesModule {}
