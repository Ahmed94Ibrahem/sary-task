import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FiltersConfigService {
  filtersUrl = environment.apiUrl + 'filters-config.json';
  constructor(private http: HttpClient) {}

  getFiltersConfig() {
    return this.http.get(this.filtersUrl);
  }
}
