import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicioUserComponent } from './lista-servicio-user.component';

describe('ListaServicioUserComponent', () => {
  let component: ListaServicioUserComponent;
  let fixture: ComponentFixture<ListaServicioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServicioUserComponent]
    });
    fixture = TestBed.createComponent(ListaServicioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
