import { selectHeroesData } from './../../../store/selectors/heroes.selectors';
import { Observable } from 'rxjs';
import { gettingHeroes } from 'src/app/store/actions/heroes.actions';
import { AppState } from './../../../store/index';
import { HerosService } from './../../../core/services/heroes.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/app/core/models/hero.model';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  @Output() toggleMySidebar: EventEmitter<any> = new EventEmitter();
  @ViewChild('input') input: any;
  showSearchInput = false;

  displayedColumns: string[] = [
    'name',
    'phone',
    'email',
    'date',
    'country',
    'company',
  ];
  dataSource!: MatTableDataSource<Hero[]>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private herosService: HerosService,
    private activatedRouter: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(gettingHeroes());
    this.store.pipe(select(selectHeroesData)).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.activatedRouter.queryParams.subscribe((res) => {
      if (res) {
        this.getFilteredData(res);
      }
    });
  }

  // Toggleing the Side Nav
  toggleSidebar() {
    this.toggleMySidebar.emit();
  }

  // Filtering Function Angular Material
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Open And Close for the Filter Input
  toggleSearchInput() {
    this.showSearchInput = !this.showSearchInput;
  }

  // Getting Filtered Data From Service
  getFilteredData(res: any) {
    let filteredResult: any;
    this.herosService.getHeros(res).subscribe((res) => {
      filteredResult = res;
      this.dataSource = new MatTableDataSource(filteredResult);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
