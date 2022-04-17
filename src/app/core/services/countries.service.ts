import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  countriesUrl = 'http://countryapi.gear.host/v1/Country/getCountries';
  constructor(private http: HttpClient) {}

  getCountries() {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.countriesUrl, { headers: headers });
  }
}
