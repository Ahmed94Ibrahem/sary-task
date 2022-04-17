import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filterFormFeatureKey, State } from '../reducers/filter-form.reducer';

export const selectFilterFormFeature =
  createFeatureSelector<State>(filterFormFeatureKey);

export const selectFormData = createSelector(
  selectFilterFormFeature,
  (state: State) => state
);
