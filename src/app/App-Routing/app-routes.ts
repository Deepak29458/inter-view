import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path:"",
        loadChildren:()=>import('src/app/home/home.module').then(h=>h.HomeModule)
    },
    {
        path:"login",
        loadChildren:()=>import('src/app/user-account/user-account.module').then(m=>m.UserAccountModule),
    },
    {
        path:"dashboard",
        loadChildren:() => import('src/app/dashboard/dashboard.module').then(d=>d.DashboardModule)
    }
];