import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaPacienteAdminComponent } from './views/admin/lista-paciente-admin/lista-paciente-admin.component';
import { ListaCompraAdminComponent } from './views/admin/lista-compra-admin/lista-compra-admin.component';
import { ListaDiarioAdminComponent } from './views/admin/lista-diario-admin/lista-diario-admin.component';
import { ListaProductoAdminComponent } from './views/admin/lista-producto-admin/lista-producto-admin.component';
import { ListaPropietarioAdminComponent } from './views/admin/lista-propietario-admin/lista-propietario-admin.component';
import { ListaProveedorAdminComponent } from './views/admin/lista-proveedor-admin/lista-proveedor-admin.component';
import { ListaResponsivaAdminComponent } from './views/admin/lista-responsiva-admin/lista-responsiva-admin.component';
import { ListaServicioAdminComponent } from './views/admin/lista-servicio-admin/lista-servicio-admin.component';
import { ListaServicioPacienteAdminComponent } from './views/admin/lista-servicio-paciente-admin/lista-servicio-paciente-admin.component';
import { ListaVentaAdminComponent } from './views/admin/lista-venta-admin/lista-venta-admin.component';
import { DetalleCompraAdminComponent } from './views/admin/detalle-compra-admin/detalle-compra-admin.component';
import { DetalleDiarioAdminComponent } from './views/admin/detalle-diario-admin/detalle-diario-admin.component';
import { DetallePacienteAdminComponent } from './views/admin/detalle-paciente-admin/detalle-paciente-admin.component';
import { DetalleProductoAdminComponent } from './views/admin/detalle-producto-admin/detalle-producto-admin.component';
import { DetallePropietarioAdminComponent } from './views/admin/detalle-propietario-admin/detalle-propietario-admin.component';
import { DetalleProveedorAdminComponent } from './views/admin/detalle-proveedor-admin/detalle-proveedor-admin.component';
import { DetalleResponsivaAdminComponent } from './views/admin/detalle-responsiva-admin/detalle-responsiva-admin.component';
import { DetalleServicioAdminComponent } from './views/admin/detalle-servicio-admin/detalle-servicio-admin.component';
import { DetalleServicioPacienteAdminComponent } from './views/admin/detalle-servicio-paciente-admin/detalle-servicio-paciente-admin.component';
import { DetalleVentaAdminComponent } from './views/admin/detalle-venta-admin/detalle-venta-admin.component';
import { ListaCitaAdminComponent } from './views/admin/lista-cita-admin/lista-cita-admin.component';
import { DetalleCitaAdminComponent } from './views/admin/detalle-cita-admin/detalle-cita-admin.component';
import { ListaHistoricoAdminComponent } from './views/admin/lista-historico-admin/lista-historico-admin.component';
import { DetalleHistoricoAdminComponent } from './views/admin/detalle-historico-admin/detalle-historico-admin.component';
import { DetalleCitaUserComponent } from './views/user/detalle-cita-user/detalle-cita-user.component';
import { DetalleDiarioUserComponent } from './views/user/detalle-diario-user/detalle-diario-user.component';
import { DetallePacienteUserComponent } from './views/user/detalle-paciente-user/detalle-paciente-user.component';
import { DetalleProductoUserComponent } from './views/user/detalle-producto-user/detalle-producto-user.component';
import { DetallePropietarioUserComponent } from './views/user/detalle-propietario-user/detalle-propietario-user.component';
import { DetalleResponsivaUserComponent } from './views/user/detalle-responsiva-user/detalle-responsiva-user.component';
import { DetalleServicioUserComponent } from './views/user/detalle-servicio-user/detalle-servicio-user.component';
import { ListaCitaUserComponent } from './views/user/lista-cita-user/lista-cita-user.component';
import { ListaDiarioUserComponent } from './views/user/lista-diario-user/lista-diario-user.component';
import { ListaPacienteUserComponent } from './views/user/lista-paciente-user/lista-paciente-user.component';
import { ListaProductoUserComponent } from './views/user/lista-producto-user/lista-producto-user.component';
import { ListaPropietarioUserComponent } from './views/user/lista-propietario-user/lista-propietario-user.component';
import { ListaResponsivaUserComponent } from './views/user/lista-responsiva-user/lista-responsiva-user.component';
import { ListaServicioUserComponent } from './views/user/lista-servicio-user/lista-servicio-user.component';
import { ListaServicioPacienteUserComponent } from './views/user/lista-servicio-paciente-user/lista-servicio-paciente-user.component';
import { ListaVentaUserComponent } from './views/user/lista-venta-user/lista-venta-user.component';
import { DetalleCompraUserComponent } from './views/user/detalle-compra-user/detalle-compra-user.component';
import { DetalleVentaUserComponent } from './views/user/detalle-venta-user/detalle-venta-user.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './views/admin/sidebar-admin/sidebar-admin.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AgregarCompraAdminComponent } from './views/admin/agregar-compra-admin/agregar-compra-admin.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgregarProductoAdminComponent } from './views/admin/agregar-producto-admin/agregar-producto-admin.component';
import { AgregarProveedorAdminComponent } from './views/admin/agregar-proveedor-admin/agregar-proveedor-admin.component';
import { AgregarPropietarioAdminComponent } from './views/admin/agregar-propietario-admin/agregar-propietario-admin.component';
import { AgregarPacienteAdminComponent } from './views/admin/agregar-paciente-admin/agregar-paciente-admin.component';
import { AgregarServicioComponent } from './views/admin/agregar-servicio/agregar-servicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPacienteAdminComponent,
    ListaCompraAdminComponent,
    ListaDiarioAdminComponent,
    ListaProductoAdminComponent,
    ListaPropietarioAdminComponent,
    ListaProveedorAdminComponent,
    ListaResponsivaAdminComponent,
    ListaServicioAdminComponent,
    ListaServicioPacienteAdminComponent,
    ListaVentaAdminComponent,
    DetalleCompraAdminComponent,
    DetalleDiarioAdminComponent,
    DetallePacienteAdminComponent,
    DetalleProductoAdminComponent,
    DetallePropietarioAdminComponent,
    DetalleProveedorAdminComponent,
    DetalleResponsivaAdminComponent,
    DetalleServicioAdminComponent,
    DetalleServicioPacienteAdminComponent,
    DetalleVentaAdminComponent,
    ListaCitaAdminComponent,
    DetalleCitaAdminComponent,
    ListaHistoricoAdminComponent,
    DetalleHistoricoAdminComponent,
    DetalleCitaUserComponent,
    DetalleDiarioUserComponent,
    DetallePacienteUserComponent,
    DetalleProductoUserComponent,
    DetallePropietarioUserComponent,
    DetalleResponsivaUserComponent,
    DetalleServicioUserComponent,
    ListaCitaUserComponent,
    ListaDiarioUserComponent,
    ListaPacienteUserComponent,
    ListaProductoUserComponent,
    ListaPropietarioUserComponent,
    ListaResponsivaUserComponent,
    ListaServicioUserComponent,
    ListaServicioPacienteUserComponent,
    ListaVentaUserComponent,
    DetalleCompraUserComponent,
    DetalleVentaUserComponent,
    DashboardAdminComponent,
    SidebarAdminComponent,
    AgregarCompraAdminComponent,
    AgregarProductoAdminComponent,
    AgregarProveedorAdminComponent,
    AgregarPropietarioAdminComponent,
    AgregarPacienteAdminComponent,
    AgregarServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
