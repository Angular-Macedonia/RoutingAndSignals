import { Routes } from '@angular/router';
import { canViewGuard } from './guards/canView.guard';
import { isLoggedInUserGuard } from './guards/loggedIn.guard';

export const routes: Routes = [
    
    {
        path: 'page-one',
        //short syntax
        loadComponent: () => import('./pages/page-one.component'),
        canActivate: [canViewGuard()]
    },
    {
        path: 'page-one',
        //short syntax
        loadComponent: () => import('./pages/page-one.component'),
        canMatch: [() => false],
        canActivate: [canViewGuard()]
    },
    {
        path: 'page-one/:detailsId',
        //short syntax
        loadComponent: () => import('./pages/page-one-details.component'),
        canActivate: [isLoggedInUserGuard]
    }
];
