import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/core/models/filter.model';
import { Hero } from 'src/app/core/models/hero.model';

export const gettingHeroes = createAction(
  '[Heroes Component] Load Heroess Failure'
  // props<{ data?: Filter }>()
);

export const gettingHeroesSuccess = createAction(
  '[Heroes Component] Load Heroess Success',
  props<{ hero: Hero }>()
);
