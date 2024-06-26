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
import {EditPasswordComponent} from "./edit-password/edit-password.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {ListProjectManagerComponent} from "./list-project-manager/list-project-manager.component";
import {authGuard} from "../../guard/auth.guard";

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
        canActivate:[authGuard],
        data: {
          permission : ["USER","ADMIN", "SUPERADMIN"]
        }
      },

      {
        path: 'objectifs',
        component: ObjectifsFinalComponent,
        canActivate:[authGuard],
        data: {
          permission : ["USER","ADMIN", "SUPERADMIN"]
        }
      },
      {
        path: 'tasks',
        component: AppChipsComponent,
        canActivate:[authGuard],data: {
          permission : ["ADMIN", "SUPERADMIN"]
        }
      },
      {
        path: 'overview',
        component: OverviewComponent,
        canActivate:[authGuard],data: {
          permission : ["USER","ADMIN", "SUPERADMIN"]
        }
      },
      {
        path: 'register',
        component: AppListsComponent,
        canActivate:[authGuard],data: {
          permission : ["ADMIN", "SUPERADMIN"]
        }
      },
      {
        path: 'menu',
        component: AppMenuComponent,
        canActivate:[authGuard],data: {
          permission : ["ADMIN", "SUPERADMIN"]
        }
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
        canActivate:[authGuard],data: {
          permission : ["ADMIN", "SUPERADMIN"]
        }

      },

      {
        path:'profile',
        component:ProfileComponent,
        canActivate:[authGuard],data: {
          permission : ["USER","ADMIN", "SUPERADMIN"]
        }

      }
      ,
      {
        path:'Editpassword',
        component:EditPasswordComponent,canActivate:[authGuard],data: {
          permission : ["USER","ADMIN", "SUPERADMIN"]
        }
      }
      ,
      {
        path:'Editprofile',
        component:EditProfileComponent,canActivate:[authGuard],data: {
          permission : ["USER","ADMIN", "SUPERADMIN"]
        }
      }

      ,
      {
        path:'employelist',
        component:ListEmployeeComponent,canActivate:[authGuard],data: {
          permission : ["ADMIN", "SUPERADMIN"]
        }

      }
      ,
      {
        path:'managerlist',
        component:ListProjectManagerComponent,canActivate:[authGuard],data: {
          permission : ["ADMIN", "SUPERADMIN"]
        }

      }
    ],
  },
];
