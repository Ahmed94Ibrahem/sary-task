import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-heroes',
  templateUrl: './ngrx-heroes.component.html',
  styleUrls: ['./ngrx-heroes.component.css'],
})
export class NgrxHeroesComponent implements OnInit {
  sideBarOpen = true;
  formValue: any;
  constructor() {}

  ngOnInit(): void {}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getFilterFormValue(data: any) {
    this.formValue = data;
  }
}
