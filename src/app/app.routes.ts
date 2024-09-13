import { Routes } from '@angular/router';
import { canViewGuard } from './guards/canView.guard';

export const routes: Routes = [
    
    {
        path: 'page-one',
        //short syntax
        loadComponent: () => import('./pages/page-one.component'),
        canActivate: [canViewGuard()]
    }
];
