import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVentaAdminComponent } from './agregar-venta-admin.component';

describe('AgregarVentaAdminComponent', () => {
  let component: AgregarVentaAdminComponent;
  let fixture: ComponentFixture<AgregarVentaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVentaAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarVentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
