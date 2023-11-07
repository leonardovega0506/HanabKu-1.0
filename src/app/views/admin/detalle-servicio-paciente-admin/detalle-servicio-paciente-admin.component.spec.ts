import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServicioPacienteAdminComponent } from './detalle-servicio-paciente-admin.component';

describe('DetalleServicioPacienteAdminComponent', () => {
  let component: DetalleServicioPacienteAdminComponent;
  let fixture: ComponentFixture<DetalleServicioPacienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleServicioPacienteAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleServicioPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
