import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as HeroesActions from '../actions/heroes.actions';
import { HerosService } from 'src/app/core/services/heroes.service';

@Injectable()
export class HeroesEffects {
  loadHeroess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HeroesActions.gettingHeroes),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.heroesService
          .getHeros()
          .pipe(map((hero) => HeroesActions.gettingHeroesSuccess({ hero })))
      )
    );
  });

  constructor(private actions$: Actions, private heroesService: HerosService) {}
}
