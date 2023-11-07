import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServicioUserComponent } from './detalle-servicio-user.component';

describe('DetalleServicioUserComponent', () => {
  let component: DetalleServicioUserComponent;
  let fixture: ComponentFixture<DetalleServicioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleServicioUserComponent]
    });
    fixture = TestBed.createComponent(DetalleServicioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
