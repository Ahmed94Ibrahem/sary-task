import {
  getFilterFormValue,
  browserReload,
} from './../actions/filter-form.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const filterFormFeatureKey = 'filterForm';

export interface State {
  email: string | null;
  phone: string | null;
  name: string | null;
  country: string | null;
  date: string | null;
  company: string | null;
}

export const initialState: State = {
  email: null,
  phone: null,
  name: null,
  country: null,
  date: null,
  company: null,
};
export const reducer = createReducer(
  initialState,
  on(getFilterFormValue, browserReload, (state, action) => {
    return {
      ...state,
      email: action.filterForm.email,
      phone: action.filterForm.phone,
      name: action.filterForm.name,
      country: action.filterForm.country,
      date: action.filterForm.date,
      company: action.filterForm.company,
    };
  })
);
