import { FiltersConfigService } from './../../../core/services/filters-config.service';
import { CountriesService } from './../../../core/services/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.css'],
})
export class SideFormComponent implements OnInit {
  countries: any[] = [];
  filtersConfig: any[] = [];
  filterForm: any = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    date: new FormControl(''),
    company: new FormControl(''),
  });

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private countriesService: CountriesService,
    private filtersConfigService: FiltersConfigService
  ) {}

  ngOnInit(): void {
    // this.getCountries();
    this.getFiltersConfig();
    this.setFormValues();
  }
  submit() {
    const searchResult = this.filterForm.value;
    Object.keys(searchResult).forEach((key) =>
      searchResult[key] == '' ? delete searchResult[key] : null
    );
    this.router.navigate([], {
      relativeTo: this.activatedRouter,
      queryParams: searchResult,
      queryParamsHandling: 'merge',
    });
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((res) => {
      console.log(res);
    });
  }

  getFiltersConfig() {
    this.filtersConfigService.getFiltersConfig().subscribe((res: any) => {
      this.filtersConfig = res;
    });
  }

  setFormValues() {
    this.activatedRouter.queryParams.subscribe((res: any) => {
      Object.keys(res).forEach((key) => {
        this.filterForm.reset();
        this.filterForm.patchValue({ [key]: res[key] });
      });
    });
  }
}
