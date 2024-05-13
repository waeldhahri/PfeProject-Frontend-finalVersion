import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AsyncPipe, CommonModule, DecimalPipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './tasks/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import {NgSelect2Module} from "ng-select2";
import { ObjectifsFinalComponent } from './objectifs-final/objectifs-final.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { OverviewComponent } from './overview/overview.component';
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import { ProfileComponent } from './profile/profile.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgbdSortableHeader} from "./badge/sortable.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    MatLegacyChipsModule,MatFormFieldModule, MatInputModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    DecimalPipe, FormsModule, AsyncPipe,  NgbdSortableHeader


  ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    /*AppMenuComponent,*/
    AppTooltipsComponent,
    ObjectifsFinalComponent,
    OverviewComponent,
    ProfileComponent,

  ],


})
export class UicomponentsModule {}
