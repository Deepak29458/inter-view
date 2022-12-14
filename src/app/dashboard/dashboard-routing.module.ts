import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideAndTopNavComponent } from './side-and-top-nav/side-and-top-nav.component';
import { StaticGraphsComponent } from './static-graphs/static-graphs.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path:"",
    component:SideAndTopNavComponent,
    children:[
      {
        path:'',
        component:StaticGraphsComponent,
      },
      {
        path:"tables",
        component:TablesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
