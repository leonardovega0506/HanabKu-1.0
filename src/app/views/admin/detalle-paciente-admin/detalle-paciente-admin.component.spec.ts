import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePacienteAdminComponent } from './detalle-paciente-admin.component';

describe('DetallePacienteAdminComponent', () => {
  let component: DetallePacienteAdminComponent;
  let fixture: ComponentFixture<DetallePacienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePacienteAdminComponent]
    });
    fixture = TestBed.createComponent(DetallePacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
