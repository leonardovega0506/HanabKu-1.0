import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicioPacienteAdminComponent } from './lista-servicio-paciente-admin.component';

describe('ListaServicioPacienteAdminComponent', () => {
  let component: ListaServicioPacienteAdminComponent;
  let fixture: ComponentFixture<ListaServicioPacienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServicioPacienteAdminComponent]
    });
    fixture = TestBed.createComponent(ListaServicioPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
