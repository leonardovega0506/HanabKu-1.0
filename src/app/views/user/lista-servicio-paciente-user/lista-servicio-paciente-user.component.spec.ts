import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicioPacienteUserComponent } from './lista-servicio-paciente-user.component';

describe('ListaServicioPacienteUserComponent', () => {
  let component: ListaServicioPacienteUserComponent;
  let fixture: ComponentFixture<ListaServicioPacienteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServicioPacienteUserComponent]
    });
    fixture = TestBed.createComponent(ListaServicioPacienteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
