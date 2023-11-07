import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProveedorAdminComponent } from './lista-proveedor-admin.component';

describe('ListaProveedorAdminComponent', () => {
  let component: ListaProveedorAdminComponent;
  let fixture: ComponentFixture<ListaProveedorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProveedorAdminComponent]
    });
    fixture = TestBed.createComponent(ListaProveedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
