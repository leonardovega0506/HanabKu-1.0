import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaAdminComponent } from './lista-venta-admin.component';

describe('ListaVentaAdminComponent', () => {
  let component: ListaVentaAdminComponent;
  let fixture: ComponentFixture<ListaVentaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVentaAdminComponent]
    });
    fixture = TestBed.createComponent(ListaVentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
