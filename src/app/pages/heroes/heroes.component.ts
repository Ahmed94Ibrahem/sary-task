import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
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
