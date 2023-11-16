import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListaCompraAdminComponent } from './views/admin/lista-compra-admin/lista-compra-admin.component';
import { DetalleCompraAdminComponent } from './views/admin/detalle-compra-admin/detalle-compra-admin.component';
import { ListaPacienteAdminComponent } from './views/admin/lista-paciente-admin/lista-paciente-admin.component';
import { DetallePacienteAdminComponent } from './views/admin/detalle-paciente-admin/detalle-paciente-admin.component';
import { ListaProductoAdminComponent } from './views/admin/lista-producto-admin/lista-producto-admin.component';
import { DetalleProductoAdminComponent } from './views/admin/detalle-producto-admin/detalle-producto-admin.component';
import { ListaPropietarioAdminComponent } from './views/admin/lista-propietario-admin/lista-propietario-admin.component';
import { DetallePropietarioAdminComponent } from './views/admin/detalle-propietario-admin/detalle-propietario-admin.component';
import { ListaProveedorAdminComponent } from './views/admin/lista-proveedor-admin/lista-proveedor-admin.component';
import { DetalleProveedorAdminComponent } from './views/admin/detalle-proveedor-admin/detalle-proveedor-admin.component';
import { ListaServicioAdminComponent } from './views/admin/lista-servicio-admin/lista-servicio-admin.component';
import { DetalleServicioAdminComponent } from './views/admin/detalle-servicio-admin/detalle-servicio-admin.component';
import { ListaVentaAdminComponent } from './views/admin/lista-venta-admin/lista-venta-admin.component';
import { DetalleVentaAdminComponent } from './views/admin/detalle-venta-admin/detalle-venta-admin.component';

const routes: Routes = [
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'compras',component:ListaCompraAdminComponent},
    {path:'compras/:id',component:DetalleCompraAdminComponent},
    {path:'paciente',component:ListaPacienteAdminComponent},
    {path:'paciente/:id',component:DetallePacienteAdminComponent},
    {path:'producto',component:ListaProductoAdminComponent},
    {path:'producto/:id',component:DetalleProductoAdminComponent},
    {path:'propietario',component:ListaPropietarioAdminComponent},
    {path:'propietario/:id',component:DetallePropietarioAdminComponent},
    {path:'proveedor',component:ListaProveedorAdminComponent},
    {path:'proveedor/:id',component:DetalleProveedorAdminComponent},
    {path:'servicio',component:ListaServicioAdminComponent},
    {path:'servicio/:id',component:DetalleServicioAdminComponent},
    {path:'ventas',component:ListaVentaAdminComponent},
    {path:'venta/:id',component:DetalleVentaAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
