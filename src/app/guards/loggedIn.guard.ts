import { ActivatedRouteSnapshot, CanActivateFn, RedirectCommand, Router, RouterStateSnapshot } from '@angular/router'; 
import { inject } from '@angular/core';


export const isLoggedInUserGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
     
  const authenticated = true; // replace with your authentication logic
  const router: Router = inject(Router); 
  
  if(!authenticated) {
    const urlTree  = router.createUrlTree(['/login']);
    return new RedirectCommand(urlTree , {skipLocationChange: true});
  }

  return true
}