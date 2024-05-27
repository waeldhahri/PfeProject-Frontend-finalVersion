import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './tasks/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import {ObjectifsFinalComponent} from "./objectifs-final/objectifs-final.component";
import {OverviewComponent} from "./overview/overview.component";
import {ProfileComponent} from "./profile/profile.component";
import {TreeComponent} from "./tree/tree.component";

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
      },

      {
        path: 'objectifs',
        component: ObjectifsFinalComponent,
      },
      {
        path: 'tasks',
        component: AppChipsComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'register',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },

      {
        path:'profile',
        component:ProfileComponent,

      }
      ,
      {
        path:'tree',
        component:TreeComponent,

      }
    ],
  },
];
