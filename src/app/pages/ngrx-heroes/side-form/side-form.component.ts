import { selectFormData } from './../../../store/selectors/filter-form.selectors';
import {
  getFilterFormValue,
  browserReload,
} from './../../../store/actions/filter-form.actions';
import { AppState } from './../../../store/index';
import { FiltersConfigService } from './../../../core/services/filters-config.service';
import { CountriesService } from './../../../core/services/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.css'],
})
export class SideFormComponent implements OnInit {
  countries: any[] = [];
  filtersConfig: any[] = [];
  filterForm: any = new FormGroup({
    email: new FormControl(null),
    name: new FormControl(null),
    phone: new FormControl(null),
    country: new FormControl(null),
    date: new FormControl(null),
    company: new FormControl(null),
  });

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private countriesService: CountriesService,
    private filtersConfigService: FiltersConfigService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // this.getCountries();
    this.getFiltersConfig();
    this.setFormValues();

    // Sending the Form Data to the URL
    this.store.pipe(select(selectFormData)).subscribe((res: any) => {
      Object.keys(res).forEach((key) => {
        res[key] == '' ? res[key] == null : res[key];
      });
      this.router.navigate([], {
        relativeTo: this.activatedRouter,
        queryParams: res,
        queryParamsHandling: 'merge',
      });
    });

    // Keep the URL With Values during Reload
    this.store.dispatch(browserReload({ filterForm: this.filterForm.value }));
  }

  // Getting Form Data
  submit() {
    this.store.dispatch(
      getFilterFormValue({ filterForm: this.filterForm.value })
    );
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

  // Init the Form with the URL Values
  setFormValues() {
    this.activatedRouter.queryParams.subscribe((res: any) => {
      Object.keys(res).forEach((key) => {
        this.filterForm.reset();
        this.filterForm.patchValue({ [key]: res[key] });
      });
    });
  }
}
