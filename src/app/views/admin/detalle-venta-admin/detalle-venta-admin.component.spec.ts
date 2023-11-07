import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaAdminComponent } from './detalle-venta-admin.component';

describe('DetalleVentaAdminComponent', () => {
  let component: DetalleVentaAdminComponent;
  let fixture: ComponentFixture<DetalleVentaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleVentaAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleVentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
