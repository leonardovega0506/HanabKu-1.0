import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProveedorAdminComponent } from './detalle-proveedor-admin.component';

describe('DetalleProveedorAdminComponent', () => {
  let component: DetalleProveedorAdminComponent;
  let fixture: ComponentFixture<DetalleProveedorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProveedorAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleProveedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
