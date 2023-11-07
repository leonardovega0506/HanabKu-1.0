import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoUserComponent } from './detalle-producto-user.component';

describe('DetalleProductoUserComponent', () => {
  let component: DetalleProductoUserComponent;
  let fixture: ComponentFixture<DetalleProductoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProductoUserComponent]
    });
    fixture = TestBed.createComponent(DetalleProductoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
