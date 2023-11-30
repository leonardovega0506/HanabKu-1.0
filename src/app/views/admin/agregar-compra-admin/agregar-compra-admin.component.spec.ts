import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCompraAdminComponent } from './agregar-compra-admin.component';

describe('AgregarCompraAdminComponent', () => {
  let component: AgregarCompraAdminComponent;
  let fixture: ComponentFixture<AgregarCompraAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarCompraAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarCompraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
