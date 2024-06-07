import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'KPI s',
  },

  {
    displayName: 'Objective',
    iconName: 'poker-chip',
    route: '/ui-components/tasks',
  },

  {
    displayName: 'Objectives',
    iconName: 'current-location',
    route: '/ui-components/objectifs',
  },

  {
    displayName: 'Performance',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Project',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Overview',
    iconName: 'list',
    route: '/ui-components/overview',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },

  {
    navCap: 'Human Resource',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/ui-components/register',
  },
  {
    displayName: 'Employee List',
    iconName: 'list',
    route: '/ui-components/employelist',
  },
  {
    displayName: 'Project Manager List',
    iconName: 'list',
    route: '/ui-components/managerlist',
  },

];
