import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaUserComponent } from './detalle-venta-user.component';

describe('DetalleVentaUserComponent', () => {
  let component: DetalleVentaUserComponent;
  let fixture: ComponentFixture<DetalleVentaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleVentaUserComponent]
    });
    fixture = TestBed.createComponent(DetalleVentaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
