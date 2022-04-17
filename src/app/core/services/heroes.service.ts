import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  heroesUrl = environment.apiUrl + 'heroes.json';
  constructor(private http: HttpClient) {}

  getHeros(params?: any) {
    return this.http.get(this.heroesUrl).pipe(
      map((res: any) => {
        if (params) {
          let filtered = res.filter((obj: any) => {
            return Object.values(params).some((val: any) =>
              Object.values(obj).includes(val)
            );
          });
          if (filtered.length) {
            return filtered;
          } else {
            return res;
          }
        } else {
          return res;
        }
      })
    );
  }
}
