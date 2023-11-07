import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicioAdminComponent } from './lista-servicio-admin.component';

describe('ListaServicioAdminComponent', () => {
  let component: ListaServicioAdminComponent;
  let fixture: ComponentFixture<ListaServicioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServicioAdminComponent]
    });
    fixture = TestBed.createComponent(ListaServicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
