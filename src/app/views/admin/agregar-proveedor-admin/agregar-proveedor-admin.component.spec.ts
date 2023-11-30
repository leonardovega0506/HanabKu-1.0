import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProveedorAdminComponent } from './agregar-proveedor-admin.component';

describe('AgregarProveedorAdminComponent', () => {
  let component: AgregarProveedorAdminComponent;
  let fixture: ComponentFixture<AgregarProveedorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProveedorAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarProveedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
