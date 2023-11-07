import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServicioAdminComponent } from './detalle-servicio-admin.component';

describe('DetalleServicioAdminComponent', () => {
  let component: DetalleServicioAdminComponent;
  let fixture: ComponentFixture<DetalleServicioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleServicioAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleServicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
