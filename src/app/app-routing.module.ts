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
import { ListaCitaAdminComponent } from './views/admin/lista-cita-admin/lista-cita-admin.component';
import { AgregarCompraAdminComponent } from './views/admin/agregar-compra-admin/agregar-compra-admin.component';
import { AgregarProductoAdminComponent } from './views/admin/agregar-producto-admin/agregar-producto-admin.component';
import { AgregarProveedorAdminComponent } from './views/admin/agregar-proveedor-admin/agregar-proveedor-admin.component';
import { AgregarPropietarioAdminComponent } from './views/admin/agregar-propietario-admin/agregar-propietario-admin.component';
import { AgregarPacienteAdminComponent } from './views/admin/agregar-paciente-admin/agregar-paciente-admin.component';
import { AgregarServicioComponent } from './views/admin/agregar-servicio/agregar-servicio.component';
import { AgregarVentaAdminComponent } from './views/admin/agregar-venta-admin/agregar-venta-admin.component';

const routes: Routes = [
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'cita',component:ListaCitaAdminComponent},
    {path:'compras',component:ListaCompraAdminComponent},
    {path:'compras/add',component:AgregarCompraAdminComponent},
    {path:'compras/:id',component:DetalleCompraAdminComponent},
    {path:'paciente',component:ListaPacienteAdminComponent},
    {path:'paciente/add',component:AgregarPacienteAdminComponent},
    {path:'paciente/:id',component:DetallePacienteAdminComponent},
    {path:'producto',component:ListaProductoAdminComponent},
    {path:'producto/add',component:AgregarProductoAdminComponent},
    {path:'producto/:id',component:DetalleProductoAdminComponent},
    {path:'propietario',component:ListaPropietarioAdminComponent},
    {path:'propietario/add',component:AgregarPropietarioAdminComponent},
    {path:'propietario/:id',component:DetallePropietarioAdminComponent},
    {path:'proveedor',component:ListaProveedorAdminComponent},
    {path:'proveedor/add',component:AgregarProveedorAdminComponent},
    {path:'proveedor/:id',component:DetalleProveedorAdminComponent},
    {path:'servicio',component:ListaServicioAdminComponent},
    {path:'servicio/add',component:AgregarServicioComponent},
    {path:'servicio/:id',component:DetalleServicioAdminComponent},
    {path:'ventas',component:ListaVentaAdminComponent},
    {path:'ventas/add',component:AgregarVentaAdminComponent},
    {path:'ventas/:id',component:DetalleVentaAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
