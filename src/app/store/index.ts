import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromFilterForm from './reducers/filter-form.reducer';
import * as fromHeroes from './reducers/heroes.reducer';


export interface AppState {

  [fromFilterForm.filterFormFeatureKey]: fromFilterForm.State;
  [fromHeroes.heroesFeatureKey]: fromHeroes.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromFilterForm.filterFormFeatureKey]: fromFilterForm.reducer,
  [fromHeroes.heroesFeatureKey]: fromHeroes.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
