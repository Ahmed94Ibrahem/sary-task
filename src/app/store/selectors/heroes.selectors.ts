import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/heroes.reducer';
import { heroesFeatureKey } from '../reducers/heroes.reducer';

export const selectHeroesFeature =
  createFeatureSelector<State>(heroesFeatureKey);

export const selectHeroesData = createSelector(
  selectHeroesFeature,
  (state: State) => state
);
