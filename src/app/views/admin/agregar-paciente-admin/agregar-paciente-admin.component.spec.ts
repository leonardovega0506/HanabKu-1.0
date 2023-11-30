import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPacienteAdminComponent } from './agregar-paciente-admin.component';

describe('AgregarPacienteAdminComponent', () => {
  let component: AgregarPacienteAdminComponent;
  let fixture: ComponentFixture<AgregarPacienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPacienteAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
