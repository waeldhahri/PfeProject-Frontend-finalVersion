import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AsyncPipe, DecimalPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbdSortableHeader, SortEvent} from "./sortable.directive";
import {Employee} from "../../../models/Employee";
import {Observable} from "rxjs";

function NgbHighlight() {

}

function NgbPaginationModule() {

}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'


})
export class AppBadgeComponent implements OnInit {

  ngOnInit(): void {
  }
/*
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }



  employees!: Observable<Employee[]>;
  total$!: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: EmployeService) {
    this.employees = service.employees;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }*/

}
