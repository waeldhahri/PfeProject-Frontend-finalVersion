import {CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const role = JSON.parse(localStorage.getItem("role") || '{}');

  const permissions = route.data['permission'];
  if (permissions.includes(role)) {
    console.log("yes",role)
    return true;
  } else {
    console.log("no",role)
    return false;
  }

};
