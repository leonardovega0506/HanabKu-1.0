import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompraAdminComponent } from './detalle-compra-admin.component';

describe('DetalleCompraAdminComponent', () => {
  let component: DetalleCompraAdminComponent;
  let fixture: ComponentFixture<DetalleCompraAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCompraAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleCompraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
