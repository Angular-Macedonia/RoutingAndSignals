import { CanActivateFn, Router } from '@angular/router'; 
import { inject } from '@angular/core';


export function canViewGuard(
  redirectRoute = '/',
): CanActivateFn {
  return () => {
    const authenticated = true; // replace with your authentication logic
    const router: Router = inject(Router); 
     debugger;
    return authenticated || router.createUrlTree([redirectRoute]);
  };
}