import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/core/models/hero.model';
import * as HeroesActions from '../actions/heroes.actions';

export const heroesFeatureKey = 'heroes';

export interface State {
  hero: Hero | null;
  error: any;
}

export const initialState: State = {
  hero: {
    id: null,
    name: null,
    email: null,
    phone: null,
    date: null,
    company: null,
    country: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(HeroesActions.gettingHeroesSuccess, (state, action) => {
    return {
      ...state,
      hero: action.hero,
      error: null,
    };
  })
);
