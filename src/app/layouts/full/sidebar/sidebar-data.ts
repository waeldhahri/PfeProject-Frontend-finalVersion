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
    iconName: 'poker-chip',
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
    displayName: 'Work Logs',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
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
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
