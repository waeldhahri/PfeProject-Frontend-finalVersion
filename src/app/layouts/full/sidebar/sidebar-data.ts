import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
    roles:["USER","ADMIN","SUPERADMIN"]
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
    roles:["USER","ADMIN","SUPERADMIN"]
  },
  {
    navCap: 'TASKS',
    roles:["USER","ADMIN","SUPERADMIN"]
  },

  {
    displayName: 'Objective',
    iconName: 'poker-chip',
    route: '/ui-components/tasks',
    roles:["USER","ADMIN","SUPERADMIN"]

  },

  {
    displayName: 'Objectives',
    iconName: 'current-location',
    route: '/ui-components/objectifs',
    roles:["USER","ADMIN","SUPERADMIN"]
  },
  {
    displayName: 'Overview',
    iconName: 'list',
    route: '/ui-components/overview',
    roles:["USER","ADMIN","SUPERADMIN"]
  },{
    navCap: 'KPI S',
    roles:["USER","ADMIN","SUPERADMIN"]
  },

  {
    displayName: 'Performance',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
    roles:["USER","ADMIN","SUPERADMIN"]
  },
  {
    displayName: 'Project',
    iconName: 'rosette',
    route: '/ui-components/badge',
    roles:["USER","ADMIN","SUPERADMIN"]
  },


  {
    navCap: 'Auth',
    roles:["USER","ADMIN","SUPERADMIN"]
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
    roles:["USER","ADMIN","SUPERADMIN"]
  },

  {
    navCap: 'Human Resource',
    roles:["SUPERADMIN"]
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/ui-components/register',
    roles:["SUPERADMIN"]
  },
  {
    displayName: 'Employee List',
    iconName: 'list',
    route: '/ui-components/employelist',
    roles:["SUPERADMIN"]

  },
  {
    displayName: 'Project Manager List',
    iconName: 'list',
    route: '/ui-components/managerlist',
    roles:["SUPERADMIN"]
  },

];
