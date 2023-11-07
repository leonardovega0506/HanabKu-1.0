import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoAdminComponent } from './detalle-producto-admin.component';

describe('DetalleProductoAdminComponent', () => {
  let component: DetalleProductoAdminComponent;
  let fixture: ComponentFixture<DetalleProductoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProductoAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
