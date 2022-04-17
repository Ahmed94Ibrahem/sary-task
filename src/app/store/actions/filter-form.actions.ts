import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/core/models/filter.model';

export const getFilterFormValue = createAction(
  '[Side Nav Component] Submit Filter Form Data',
  props<{ filterForm: Filter }>()
);

export const browserReload = createAction(
  '[Side Nav Component] browser Reload',
  props<{ filterForm: Filter }>()
);
