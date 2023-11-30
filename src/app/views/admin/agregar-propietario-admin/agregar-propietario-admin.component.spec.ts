import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPropietarioAdminComponent } from './agregar-propietario-admin.component';

describe('AgregarPropietarioAdminComponent', () => {
  let component: AgregarPropietarioAdminComponent;
  let fixture: ComponentFixture<AgregarPropietarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPropietarioAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarPropietarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
