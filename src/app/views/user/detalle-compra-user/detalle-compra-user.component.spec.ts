import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompraUserComponent } from './detalle-compra-user.component';

describe('DetalleCompraUserComponent', () => {
  let component: DetalleCompraUserComponent;
  let fixture: ComponentFixture<DetalleCompraUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCompraUserComponent]
    });
    fixture = TestBed.createComponent(DetalleCompraUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
