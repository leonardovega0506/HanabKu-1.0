import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaUserComponent } from './lista-venta-user.component';

describe('ListaVentaUserComponent', () => {
  let component: ListaVentaUserComponent;
  let fixture: ComponentFixture<ListaVentaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVentaUserComponent]
    });
    fixture = TestBed.createComponent(ListaVentaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
