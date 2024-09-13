import { Routes } from '@angular/router';
import { canViewGuard } from './guards/canView.guard';
import { isLoggedInUserGuard } from './guards/loggedIn.guard';

export const routes: Routes = [
    //REDIRECTS
    //NESTED routes
    // Short vs Long Syntax
    // not found page 404
    // wildcard route
    {
        path: 'page-one',
        //short syntax
        loadComponent: () => import('./pages/page-one.component'),
        title: 'Page One',
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
        loadComponent: () => import('./pages/page-one-details.component').then(m => m.PageOneDetailsComponent),
        canActivate: [isLoggedInUserGuard]
    }
];
