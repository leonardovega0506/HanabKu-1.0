import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListaCompraAdminComponent } from './views/admin/lista-compra-admin/lista-compra-admin.component';

const routes: Routes = [
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'compras',component:ListaCompraAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
