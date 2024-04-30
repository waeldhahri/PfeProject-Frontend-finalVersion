import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UiComponentsRoutes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TablerIconsModule.pick(TablerIcons),
        MatNativeDateModule,
        MatLegacyChipsModule,

    ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    /*AppMenuComponent,*/
    AppTooltipsComponent,
    ObjectifsFinalComponent,
    OverviewComponent,
  ],


})
export class UicomponentsModule {}
